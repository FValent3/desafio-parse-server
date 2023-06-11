import api from '@config/api'

export default async (app) => {
  app.use('/parse', api.app)
  await api.start()
}
