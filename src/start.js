import app from '@config/app'

import { generateMovies } from './dummyData'

const port = process.env.PORT || 1337
const nodeEnv = process.env.NODE_ENV || 'development'

if (nodeEnv === 'development') {
  generateMovies(10)
}

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
