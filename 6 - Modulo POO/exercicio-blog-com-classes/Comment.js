module.exports = class Comment {
  constructor(username, content) {
    this.username = username
    this.content = content
    this.createdAt = new Date()
  }
}