'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpTrayIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  TrashIcon,
  ArrowRightOnRectangleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/solid'
import Button from '@/app/components/ui/Button'

/**
 * Owner-only photo manager.
 *
 * Built for a phone at a job site as much as a desktop: large tap targets, one
 * column on mobile, and the file input accepts the camera directly.
 *
 * The client never decides whether the user is authenticated — it just calls
 * the API and reacts to a 401. Every route re-checks the session server-side,
 * so hiding UI here is a convenience, never a security boundary.
 */

const CATEGORIES = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'agricultural', label: 'Agricultural' },
  { value: 'communications', label: 'Communications' },
  { value: 'generator', label: 'Generators' },
]

const INPUT =
  'w-full rounded-sm border-0 bg-white px-3.5 py-3 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cruz-blue'

function Banner({ kind, children }) {
  if (!children) return null
  const tone =
    kind === 'error'
      ? 'border-cruz-red bg-red-50 text-red-900'
      : 'border-green-600 bg-green-50 text-green-900'
  return (
    <p role="status" className={`rounded-sm border-l-4 px-4 py-3 text-sm ${tone}`}>
      {children}
    </p>
  )
}

/* -------------------------------------------------------------------------- */

/**
 * Shown when the deployment is missing its admin environment variables.
 * Names the exact variables that are unset — with nothing configured there is
 * nothing to attack, and the alternative is the owner guessing.
 */
function NotConfigured({ detail, onRetry }) {
  const missing = Array.isArray(detail?.missing) ? detail.missing : []
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-5 py-12">
      <div className="rounded-sm border-l-4 border-cruz-yellow bg-white p-7 ring-1 ring-gray-200">
        <h1 className="font-display text-3xl font-extrabold uppercase text-gray-900">
          Not configured yet
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-700">
          {detail?.error || 'Admin is not configured on this deployment.'}
        </p>

        {missing.length > 0 && (
          <>
            <p className="mt-5 text-sm font-semibold text-gray-900">
              Missing environment variable{missing.length === 1 ? '' : 's'}:
            </p>
            <ul className="mt-2 flex flex-col gap-1">
              {missing.map((name) => (
                <li key={name} className="rounded-sm bg-gray-100 px-3 py-2 font-mono text-xs text-gray-800">
                  {name}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-6 rounded-sm bg-gray-50 p-4 text-sm leading-6 text-gray-700 ring-1 ring-gray-200">
          <p className="font-semibold text-gray-900">Most likely cause</p>
          <p className="mt-1">
            Vercel applies environment variables at <strong>build</strong> time. If you added them
            after the last deploy, they are not live yet — go to Deployments, then the ⋯ menu, then
            Redeploy.
          </p>
          <p className="mt-2">
            Also check the variables are scoped to <strong>Production</strong>. Full steps are in{' '}
            <code className="rounded bg-gray-200 px-1">ADMIN-SETUP.md</code>.
          </p>
        </div>

        <Button onClick={onRetry} variant="secondary" size="md" className="mt-6 w-full">
          Check again
        </Button>
      </div>

      <Link href="/" className="mt-6 text-center text-sm text-gray-500 hover:text-gray-900">
        &larr; Back to the website
      </Link>
    </div>
  )
}

function LoginForm({ onSignedIn }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Could not sign in.')
        return
      }
      onSignedIn()
    } catch {
      setError('Could not reach the server.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-12">
      <div className="rounded-sm bg-white p-7 ring-1 ring-gray-200">
        <h1 className="font-display text-3xl font-extrabold uppercase text-gray-900">
          Photo manager
        </h1>
        <p className="mt-2 text-sm text-gray-600">Sign in to add photos to the gallery.</p>

        <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="mb-1.5 block text-sm font-semibold text-gray-900">
              Username
            </label>
            <input
              id="username"
              name="username"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={INPUT}
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={INPUT}
            />
          </div>

          <Banner kind="error">{error}</Banner>

          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={busy}>
            {busy ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </div>

      <Link href="/" className="mt-6 text-center text-sm text-gray-500 hover:text-gray-900">
        &larr; Back to the website
      </Link>
    </div>
  )
}

/* -------------------------------------------------------------------------- */

function UploadForm({ onUploaded }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [category, setCategory] = useState('residential')
  const [alt, setAlt] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState('')

  // Revoke the object URL when it changes or unmounts, or the browser holds
  // the whole image in memory for the life of the page.
  useEffect(() => {
    if (!file) {
      setPreview('')
      return
    }
    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  async function submit(e) {
    e.preventDefault()
    if (!file) return
    setBusy(true)
    setError('')
    setDone('')

    try {
      const body = new FormData()
      body.append('file', file)
      body.append('category', category)
      body.append('alt', alt)

      const res = await fetch('/api/admin/upload', { method: 'POST', body })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(data.error || 'Upload failed.')
        return
      }

      setDone('Uploaded. It is saved as a draft below — press Publish when you are happy with it.')
      setFile(null)
      setAlt('')
      e.target.reset()
      onUploaded(data.item)
    } catch {
      setError('Could not reach the server.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 rounded-sm bg-white p-6 ring-1 ring-gray-200">
      <h2 className="font-display text-2xl font-extrabold uppercase text-gray-900">Add a photo</h2>

      <div>
        <label htmlFor="file" className="mb-1.5 block text-sm font-semibold text-gray-900">
          Photo
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
          required
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="w-full rounded-sm border border-dashed border-gray-300 bg-gray-50 p-3 text-sm file:mr-3 file:rounded-sm file:border-0 file:bg-cruz-blue file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white"
        />
        <p className="mt-1.5 text-xs text-gray-500">
          JPEG, PNG, WebP or HEIC, up to 15 MB. Location data is removed automatically before the
          photo is published.
        </p>
      </div>

      {preview && (
        <img
          src={preview}
          alt="Selected photo preview"
          className="max-h-64 w-full rounded-sm object-contain ring-1 ring-gray-200"
        />
      )}

      <div>
        <label htmlFor="category" className="mb-1.5 block text-sm font-semibold text-gray-900">
          Gallery
        </label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={INPUT}
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="alt" className="mb-1.5 block text-sm font-semibold text-gray-900">
          What is in the photo?
        </label>
        <input
          id="alt"
          name="alt"
          required
          minLength={10}
          maxLength={200}
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          placeholder="e.g. New 200 amp panel installed in a Storm Lake home"
          className={INPUT}
        />
        <p className="mt-1.5 text-xs text-gray-500">
          Required. This is read aloud to visually impaired visitors and is how the photo gets
          found in Google Images. {alt.trim().length}/200
        </p>
      </div>

      <Banner kind="error">{error}</Banner>
      <Banner kind="ok">{done}</Banner>

      <Button type="submit" variant="primary" size="lg" disabled={busy || !file}>
        <ArrowUpTrayIcon className="h-5 w-5" aria-hidden="true" />
        {busy ? 'Uploading…' : 'Upload photo'}
      </Button>
    </form>
  )
}

/* -------------------------------------------------------------------------- */

/**
 * Add a crew member. Same upload pipeline as a gallery photo — magic-byte
 * checking, sharp re-encode, EXIF/GPS stripped — so a portrait taken on a job
 * site cannot leak where it was shot either.
 */
function TeamForm({ onAdded }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState('')

  useEffect(() => {
    if (!file) {
      setPreview('')
      return
    }
    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  async function submit(e) {
    e.preventDefault()
    if (!file) return
    setBusy(true)
    setError('')
    setDone('')
    try {
      const body = new FormData()
      body.append('file', file)
      body.append('kind', 'team')
      body.append('name', name)
      body.append('role', role)

      const res = await fetch('/api/admin/upload', { method: 'POST', body })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Could not add them.')
        return
      }
      setDone(`${name} added as a draft. Press Publish to put them on the site.`)
      setFile(null)
      setName('')
      setRole('')
      e.target.reset()
      onAdded(data.item)
    } catch {
      setError('Could not reach the server.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 rounded-sm bg-white p-6 ring-1 ring-gray-200">
      <h2 className="font-display text-2xl font-extrabold uppercase text-gray-900">
        Add an electrician
      </h2>

      <div>
        <label htmlFor="team-file" className="mb-1.5 block text-sm font-semibold text-gray-900">
          Photo
        </label>
        <input
          id="team-file"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
          required
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="w-full rounded-sm border border-dashed border-gray-300 bg-gray-50 p-3 text-sm file:mr-3 file:rounded-sm file:border-0 file:bg-cruz-blue file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white"
        />
        <p className="mt-1.5 text-xs text-gray-500">
          A head-and-shoulders shot works best — these are shown in a tall card.
        </p>
      </div>

      {preview && (
        <img
          src={preview}
          alt="Selected photo preview"
          className="max-h-64 w-full rounded-sm object-contain ring-1 ring-gray-200"
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="team-name" className="mb-1.5 block text-sm font-semibold text-gray-900">
            Name
          </label>
          <input
            id="team-name"
            required
            minLength={2}
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Isaac Cruz"
            className={INPUT}
          />
        </div>
        <div>
          <label htmlFor="team-role" className="mb-1.5 block text-sm font-semibold text-gray-900">
            Role
          </label>
          <input
            id="team-role"
            required
            minLength={2}
            maxLength={80}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Master electrician"
            className={INPUT}
          />
        </div>
      </div>

      <Banner kind="error">{error}</Banner>
      <Banner kind="ok">{done}</Banner>

      <Button type="submit" variant="primary" size="lg" disabled={busy || !file}>
        <ArrowUpTrayIcon className="h-5 w-5" aria-hidden="true" />
        {busy ? 'Adding…' : 'Add to the team'}
      </Button>
    </form>
  )
}

function TeamRow({ item, index, total, onChange, onDelete, onReorder }) {
  const [busy, setBusy] = useState(false)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(item.name ?? '')
  const [role, setRole] = useState(item.role ?? '')
  const [error, setError] = useState('')

  async function patch(body) {
    setBusy(true)
    setError('')
    try {
      const res = await fetch('/api/admin/photos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, ...body }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Could not save.')
        return null
      }
      return data
    } finally {
      setBusy(false)
    }
  }

  async function saveDetails() {
    const data = await patch({ name, role })
    if (data?.item) {
      onChange(data.item)
      setEditing(false)
    }
  }

  async function remove() {
    if (!confirm(`Remove ${item.name} from the site? This cannot be undone.`)) return
    setBusy(true)
    try {
      const res = await fetch(`/api/admin/photos?id=${encodeURIComponent(item.id)}`, {
        method: 'DELETE',
      })
      if (res.ok) onDelete(item.id)
    } finally {
      setBusy(false)
    }
  }

  return (
    <li className="flex flex-col gap-4 rounded-sm bg-white p-4 ring-1 ring-gray-200 sm:flex-row">
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-sm bg-gray-100 sm:h-32 sm:w-24">
        <Image src={item.url} alt={item.alt} fill sizes="96px" className="object-cover object-top" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-bold uppercase tracking-wide ${
              item.published ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-900'
            }`}
          >
            {item.published ? (
              <>
                <CheckCircleIcon className="h-3.5 w-3.5" aria-hidden="true" /> On the site
              </>
            ) : (
              'Draft'
            )}
          </span>
          <span className="text-xs text-gray-500">
            {index + 1} of {total}
          </span>
        </div>

        {editing ? (
          <div className="flex flex-col gap-2">
            <input value={name} onChange={(e) => setName(e.target.value)} className={INPUT} aria-label="Name" />
            <input value={role} onChange={(e) => setRole(e.target.value)} className={INPUT} aria-label="Role" />
            <div className="flex gap-2">
              <Button onClick={saveDetails} variant="primary" size="sm" disabled={busy}>
                Save
              </Button>
              <button
                type="button"
                onClick={() => {
                  setEditing(false)
                  setName(item.name ?? '')
                  setRole(item.role ?? '')
                }}
                className="rounded-sm px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-display text-xl font-bold uppercase leading-tight text-gray-900">
              {item.name}
            </p>
            <p className="text-sm text-gray-600">{item.role}</p>
          </div>
        )}

        <Banner kind="error">{error}</Banner>

        {!editing && (
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            <Button
              onClick={async () => {
                const data = await patch({ published: !item.published })
                if (data?.item) onChange(data.item)
              }}
              variant={item.published ? 'secondary' : 'primary'}
              size="sm"
              disabled={busy}
            >
              {item.published ? 'Unpublish' : 'Publish'}
            </Button>
            <button
              type="button"
              onClick={() => setEditing(true)}
              disabled={busy}
              className="rounded-sm px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Edit
            </button>
            <span className="flex gap-1">
              <button
                type="button"
                onClick={() => onReorder(item.id, 'up')}
                disabled={busy || index === 0}
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gray-100 text-gray-700 disabled:opacity-40"
              >
                <span className="sr-only">Move {item.name} up</span>
                <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onReorder(item.id, 'down')}
                disabled={busy || index === total - 1}
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gray-100 text-gray-700 disabled:opacity-40"
              >
                <span className="sr-only">Move {item.name} down</span>
                <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </span>
            <button
              type="button"
              onClick={remove}
              disabled={busy}
              className="inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
            >
              <TrashIcon className="h-4 w-4" aria-hidden="true" />
              Remove
            </button>
          </div>
        )}
      </div>
    </li>
  )
}

function PhotoRow({ item, onChange, onDelete }) {
  const [busy, setBusy] = useState(false)

  async function togglePublish() {
    setBusy(true)
    try {
      const res = await fetch('/api/admin/photos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, published: !item.published }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) onChange(data.item)
    } finally {
      setBusy(false)
    }
  }

  async function remove() {
    if (!confirm('Delete this photo permanently? This cannot be undone.')) return
    setBusy(true)
    try {
      const res = await fetch(`/api/admin/photos?id=${encodeURIComponent(item.id)}`, {
        method: 'DELETE',
      })
      if (res.ok) onDelete(item.id)
    } finally {
      setBusy(false)
    }
  }

  return (
    <li className="flex flex-col gap-4 rounded-sm bg-white p-4 ring-1 ring-gray-200 sm:flex-row">
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-sm bg-gray-100 sm:h-28 sm:w-40">
        <Image src={item.url} alt={item.alt} fill sizes="160px" className="object-cover" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-bold uppercase tracking-wide ${
              item.published ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-900'
            }`}
          >
            {item.published ? (
              <>
                <CheckCircleIcon className="h-3.5 w-3.5" aria-hidden="true" /> Live
              </>
            ) : (
              'Draft'
            )}
          </span>
          <span className="rounded-sm bg-gray-100 px-2 py-1 text-xs font-semibold uppercase text-gray-700">
            {item.category}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(item.uploadedAt).toLocaleDateString()}
          </span>
        </div>

        <p className="break-words text-sm text-gray-700">{item.alt}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Button
            onClick={togglePublish}
            variant={item.published ? 'secondary' : 'primary'}
            size="sm"
            disabled={busy}
          >
            {item.published ? (
              <>
                <EyeSlashIcon className="h-4 w-4" aria-hidden="true" /> Unpublish
              </>
            ) : (
              <>
                <EyeIcon className="h-4 w-4" aria-hidden="true" /> Publish
              </>
            )}
          </Button>
          <button
            type="button"
            onClick={remove}
            disabled={busy}
            className="inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
          >
            <TrashIcon className="h-4 w-4" aria-hidden="true" />
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

/* -------------------------------------------------------------------------- */

export default function AdminApp() {
  const [authed, setAuthed] = useState(null) // null = still checking
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [configError, setConfigError] = useState(null)
  const [tab, setTab] = useState('photos')

  /**
   * Fail closed.
   *
   * This previously checked only for 401 and treated everything else as
   * authenticated. When the server returned 503 (admin env vars unset) that
   * fell through and rendered the manager UI to an unauthenticated visitor.
   * No data or capability leaked -- every route rejects independently, so the
   * list came back empty and writes were refused -- but it looked signed in,
   * which is unacceptable on its own.
   *
   * Only an explicit 200 counts as signed in now. Anything else is not.
   */
  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/photos')
      const data = await res.json().catch(() => ({}))

      if (res.status === 503) {
        setConfigError(data)
        setAuthed(false)
        return
      }
      if (res.status !== 200) {
        setAuthed(false)
        return
      }

      setConfigError(null)
      setItems(Array.isArray(data.items) ? data.items : [])
      setAuthed(true)
    } catch {
      setAuthed(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function signOut() {
    await fetch('/api/admin/logout', { method: 'POST' })
    setAuthed(false)
    setItems([])
  }

  if (authed === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-gray-500">Loading…</p>
      </div>
    )
  }

  // Misconfiguration is not a login failure — showing a login form the owner
  // can never get through would send them hunting for a wrong password.
  if (configError) return <NotConfigured detail={configError} onRetry={load} />

  if (!authed) return <LoginForm onSignedIn={load} />

  const photos = items.filter((i) => (i.kind ?? 'gallery') === 'gallery')
  // Team is ordered by `order`, not upload date — the owner controls who
  // appears first, so the admin list must match what the site shows.
  const team = items
    .filter((i) => i.kind === 'team')
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  const live = items.filter((i) => i.published)
  const drafts = items.filter((i) => !i.published)

  async function reorder(id, move) {
    const res = await fetch('/api/admin/photos', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, move }),
    })
    // Reordering rewrites `order` across the whole team, so refetch rather
    // than trying to mirror the server's arithmetic on the client.
    if (res.ok) load()
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-6">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-extrabold uppercase text-gray-900">
            Photo manager
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            {live.length} live · {drafts.length} draft{drafts.length === 1 ? '' : 's'}
          </p>
        </div>
        <div className="flex gap-2">
          <Button href="/gallary" variant="secondary" size="sm">
            View gallery
          </Button>
          <button
            type="button"
            onClick={signOut}
            className="inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
          >
            <ArrowRightOnRectangleIcon className="h-4 w-4" aria-hidden="true" />
            Sign out
          </button>
        </div>
      </header>

      {/* Two jobs, two tabs — the forms are different enough that stacking
          both on one screen made the page long and easy to mis-fill. */}
      <div className="mb-6 flex gap-1 border-b-2 border-gray-200" role="tablist">
        {[
          { id: 'photos', label: `Gallery photos (${photos.length})` },
          { id: 'team', label: `Team (${team.length})` },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-0.5 border-b-4 px-4 py-3 font-display text-lg font-bold uppercase tracking-wide transition ${
              tab === t.id
                ? 'border-cruz-blue text-cruz-blue'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'photos' ? (
        <>
          <UploadForm onUploaded={(item) => setItems((prev) => [item, ...prev])} />

          <section className="mt-10">
            <h2 className="font-display text-2xl font-extrabold uppercase text-gray-900">
              Your photos
            </h2>

            {loading && <p className="mt-4 text-sm text-gray-500">Loading…</p>}

            {!loading && photos.length === 0 && (
              <p className="mt-4 rounded-sm bg-white p-6 text-sm text-gray-600 ring-1 ring-gray-200">
                No uploads yet. The galleries are still showing the photos built into the site —
                adding one here adds to them rather than replacing them.
              </p>
            )}

            <ul role="list" className="mt-4 flex flex-col gap-3">
              {photos.map((item) => (
                <PhotoRow
                  key={item.id}
                  item={item}
                  onChange={(updated) =>
                    setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)))
                  }
                  onDelete={(id) => setItems((prev) => prev.filter((i) => i.id !== id))}
                />
              ))}
            </ul>
          </section>
        </>
      ) : (
        <>
          <TeamForm onAdded={(item) => setItems((prev) => [item, ...prev])} />

          <section className="mt-10">
            <h2 className="font-display text-2xl font-extrabold uppercase text-gray-900">
              Your team
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Shown on the gallery page in this order. Published people replace the placeholder
              crew built into the site.
            </p>

            {loading && <p className="mt-4 text-sm text-gray-500">Loading…</p>}

            {!loading && team.length === 0 && (
              <p className="mt-4 rounded-sm bg-white p-6 text-sm text-gray-600 ring-1 ring-gray-200">
                No electricians added yet. Until you add someone, the site shows the placeholder
                crew cards.
              </p>
            )}

            <ul role="list" className="mt-4 flex flex-col gap-3">
              {team.map((item, i) => (
                <TeamRow
                  key={item.id}
                  item={item}
                  index={i}
                  total={team.length}
                  onChange={(updated) =>
                    setItems((prev) => prev.map((x) => (x.id === updated.id ? updated : x)))
                  }
                  onDelete={(id) => setItems((prev) => prev.filter((x) => x.id !== id))}
                  onReorder={reorder}
                />
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  )
}
