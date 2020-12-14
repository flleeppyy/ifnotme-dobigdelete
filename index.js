const Discord = require('discord.js')
const app = new Discord.Client()
const config = require('./config.js')
app.once('ready', () => {
  app.user.setStatus('invisible')
  // app.user.setActivity('you breathe', {type: 'LISTENING'})
  app.on('message', (message) => {
    // console.log('got message')
    if (message.channel.id === '787473939630260224') {
      // console.log('this is the right channel')
      if (message.author.id !== '710227752963407935') {
        // console.log('this is not fleepy')
        console.log(message.author.username + '#' + message.author.discriminator)
        
        let fuck = ['fuck u', 'fuck you', 'your message was probably against TOS', 'stop', 'please stop', 'please stop and never come back',' please never come back', 'leave this channel at peace', 'this is for cute and fluffy things only, what you posted probably wasn\'t cute', 'mmmmm no', 'no', 'stop it, get some help']
        message.delete({reason: fuck[Math.floor(Math.random() * fuck.length)]})
      }
    }
  })
})

app.login(config.token)