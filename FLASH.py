
# coding: utf-8

# In[ ]:

def matching(istring , lstring): # inputString , libraryKeyString
    for words in istring.split(): #loops through input
        if words in lstring.split(','):		# find matching words
            return True				# pops out
        
bot_says = {"sad,pissed,angry,punch,kick,swear,lonely,puke,screw,ass,suck": "'Don\'t worry"", eveything\'s gonna b alright baby, I'm right here with ya yo'" , 
      "happy,joy,excited,hype,good,joyful,kiss,yay,ya,woohoo,like,love":"'Well someone seems happy," \
      "I'm happy for you too bby!'"
      }
c_times = int( input("How many times do ya wanna chat with this bot?: --> ") )
times = 0 # track chattin times
while True:
    
    user_says = input('whatcha wanna chat about?? : --> ')
    
    for key in bot_says.keys():
        if matching(user_says,key): 
            print(bot_says[key] , ending = '')
            not_in_database = 0
            
    if not_in_database == 1:
        print("'Ya I don't really give a dayum crap about you now,chat with me when u "              "wanna have a real conversation ya punk!'")
    c_times -= 1 # tracking
    times += 1 # tracking
    if c_times ==0: #comes first
        break
    end = input('Wanna finish this conversation earlier?("Y" or "Yes" to quit) : --> ')
    end = end.upper()
    if end == 'Y' or end == "YES":
        print('dayum dickens u ended this earlier than u said asshole! CY@')
        break
print("chated with this bot for '{}' times (can't be bothered writing "    "another logic for this meaningless english grammar crap)".format(times))

