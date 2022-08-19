# **[Ascean: Ascea Companion App][A First Place]**


## Hello again, weary competitor of the great **[Ascea][Another place]**! It is myself, Mirio, a kindly merchant traveling from Lor, here to showcase an exciting battle aid for your next duel. I'm sure your [constant gameplay][don't look] has left you bereft of hope, shambling for some semblance of salvation. Well, fear no more !! Just released of my [own free will][best not look], this may yet help you better setup your survival strategies. This application will allow you to create characters in advance with in-game statistics, seeing how one may better resource concepts and pair synergistic equipment pieces together for great forms of **_attack_** and **_defense_**! With once last chance to win now steeling your heart, let us venture into this sorcery the likes this daethic worshiper of the One Above believes somewhat blasphemous but for the purposes of this sale I'll allow it.
<br /><br />

# Screenshot[s] of This Exciting Opportunity! 

1. Clone the repo
2. Rename the folder to your Project
3. Delete the `.git` file, when you are in the root of the file, you can press `ls` and you should see a `.git` file, then go ahead and run `rm -rf .git`


#### Setup your git repo
0. Setup your `.env` file and add all the things you need! (look at mongoose movies for reference!)
1. in the project root `git init`
2. `git add .` to add all the starter code
3. `git commit -m "setup boilerplate"` 
4. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
5. copy the remote address
6. In your terminal add the remote `git remote add origin yourGithubRepo'sAddressGoesHere`
7. `git pull origin main` If a screen pulls up asking you to do something just press `:q` and then `enter` (thats vim btw :) )
8. `git push origin main`

#### Setup your login (THE APP WON'T WORK until you do, no VIEWS are setup, or the landing route)

0. Setup your database connection string
1. Then Setup Your User Model, 
2. Follow the steps from the lesson plan to get your Google login credentials for your `.env` file (create the file if you haven't), or you can just copy the ones from earlier if you want to reuse them.
3. Setup the Code in your config passport 
4. Setup your callback routes in your `routes/index`
5. Setup a view and test your login!

[A First Place]: https://shielded-cove-60674.herokuapp.com/profiles/62fecfbbea6f9e3e222fd24e/characters/new
[don't look]: https://www.youtube.com/watch?v=uCGD9dT12C0
[best not look]: https://www.youtube.com/watch?v=zfy5dFhw3ik
[Another place]: https://daethos.github.io/Arena
#### Make a commit 

```git commit -m "setup up oauth and User Model"```
