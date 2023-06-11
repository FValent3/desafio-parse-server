import Parse from 'parse/node'

const authController = {
  async login (req, res) {
    const { email, password } = req.body

    try {
      const user = await Parse.User.logIn(email, password)

      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' })
      }

      return res.status(200).json(user.toJSON())
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  }
}

export { authController }
