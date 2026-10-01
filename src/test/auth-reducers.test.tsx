import { describe, expect, it } from 'vitest'
import reducer, { signedIn, signedOut } from '../auth/authSlice'

describe('authSlice', () => {
it('returns the initial state', () => {
    expect(reducer(undefined, { type: '@@init' })).toEqual({ status: 'loading', username: null, roles: [] })
  })

  it('stores user and roles on sign-in', () => {
    const state = reducer(undefined, signedIn({ username: 'alice', roles: ['admin'] }))
    expect(state).toEqual({ status: 'authenticated', username: 'alice', roles: ['admin'] })
  })

  it('clears everything on sign-out', () => {
    const signedInState = reducer(undefined, signedIn({ username: 'alice', roles: ['admin'] }))
    expect(reducer(signedInState, signedOut()).roles).toEqual([])
  })
})