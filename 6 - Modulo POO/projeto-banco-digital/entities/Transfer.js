module.exports = class Transfer{
  constructor(userSender,userReceived,value){
    this.userSender = userSender
    this.userReceived = userReceived
    this.value = value
    this.createdAt = new Date()
  }
}