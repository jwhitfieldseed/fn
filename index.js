import * as fn from './functions'
const { autoPartial } = fn

// Values
export const isUndefined = fn.isUndefined
export const isPromise = fn.isPromise

// Iterable
export const reduce = autoPartial(2, fn.reduce)
export const map = autoPartial(2, fn.map)
export const filter = autoPartial(2, fn.filter)
export const take = autoPartial(2, fn.take)
export const toArray = fn.toArray
export const head = fn.head
export const tail = fn.tail
export const split = autoPartial(2, fn.split)
export const splitWhen = autoPartial(2, fn.splitWhen)

// Functions
export const flow = fn.flow
export const pipe = fn.pipe

// Promises
export const delay = fn.delay
export const flowAsync = fn.flowAsync
export const pipeAsync = fn.pipeAsync
