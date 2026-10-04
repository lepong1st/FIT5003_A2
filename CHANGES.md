# Changes

- `templates/base.html:5,16`
  - Minor text change to title, banner, to differentiate original app and fixed app

## A. SQL Injection

- `app.py:118-122`
  - replace query with parameterized query to prevent user inputs being interpreted in query

## B. XSS

- `templates/dashboard.html:21`
  - Removed jinja `safe` filter to prevent rendering of unsafe inputs
  - Loaded data no longer interpreted; fixes saved XSS vulnerability

- `templates/search.html:9`
  - Removed jinja `safe` filter to prevent rendering of unsafe inputs
  - User inputs no longer interpreted; fixes reflected XSS vulnerability

## C. CSRF

- `app.py":26,101`
  - Add dictionary to save CSRF tokens per session
  - Add method to validate form CSRF token against saved CSRF token

- `app.py":124-125,135`
  - Generate and save CSRF token on login
  - Remove CSRF token on log out

- `app.py":152,217`
  - Add csrf token to template rendering

- `templates/dashboard.html:12,24`
  - Add hidden input to attach CSRF token to submitted forms

- `templates/pofile.html:9`
  - Add hidden input to attach CSRF token to submitted form

## D. Session and Cookie Security

- `app.py:127`
  - Add securities to set cookie
    - `httponly=True` to prevent JS read
    - `samesite=Strict` to prevent cookies being passed between sites
      - `Lax` also works, but strict is probably better for a banking app
    - `secure=True` to send cookies over HTTPS only; ensure cookies are encrypted when sent
      - Commented out for local testing; this will require HTTPS to be used in production

## E. CORS

- `app.py:228-231`
  - Remove code that generates CORS headers for all origins; use default headers
    - Alternatively, a whitelisted set of origins could be implemented
