export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-23'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skJSKGfHCvxbVh14QZCHVYXInV7HOng0pyAy9bPaTYWuedhROt18niy0ceouDjVsS068eFcSYNMmWuR9YOsfSYPECFzOeIzQ1u19aVoZgMWoOUsz9i8ovA26G55vflOWv4aCfM2VzN5FnlXQoYvs82XlBzxq2IEoeNMXajVBROfXwaQcL73y",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
