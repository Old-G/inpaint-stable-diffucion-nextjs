export const checkEmail = (
  debounceEmail: string,
  setValidEmail: (arg: string) => void,
  setIsValidEmail: (arg: boolean) => void,
  setEmailError: (arg: string) => void
) => {
  const regexEmail =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (debounceEmail.match(regexEmail)) {
    setValidEmail(debounceEmail.trim())
    setIsValidEmail(true)
    setEmailError('')
  } else if (debounceEmail === '') {
    setIsValidEmail(false)
    setEmailError('This field is required')
  } else {
    setValidEmail(debounceEmail)
    setEmailError('You have entered an invalid email address!')
    setIsValidEmail(false)
  }
}
