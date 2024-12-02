# Installation

1. `npm i`
2. `npm run build`
3. `npm run dev`

## Testing Bug Report Form

To test the bug report form follow these steps:

1. Create a file called `.env` in the base directoy
2. Add a line to the file `VITE_AUTH_TOKEN=""`
3. Go to [https://github.com/](github.com)
    * Click your profile in the top right
    * Select Settings
    * Select Developer Settings on the bottom left
    * Select Personal access tokens and then Tokens (classic)
    * Generate new token (classic)
    * Give it the `public_repo` permission (only that one)
4. Add your new token between the `""` in the line you added in step 2