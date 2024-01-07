'use server'

import fetch from 'node-fetch'

export async function verifyCaptcha(token) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    },
  )

  const data = await response.json()

  if (data.success) {
    return 'success!'
  } else {
    throw new Error('Failed Captcha')
  }
}
