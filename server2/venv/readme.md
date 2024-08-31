# navigate to server2 directory
# install requirements from requirements.txt in server2 by typing below coomand in terminal
pip install -r requirements.txt  (need python installed previously in your system to work)


# after this type-> 
venv\Scripts\activate     
# if the above command throws some erroor its probably due to windows(for windows users) security error
# in such case write below command in terminal->
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# after this again run the above command (venv\Scrvipts\activate  )




# run this command to activate the server->     
uvicorn main:app --host 0.0.0.0 --port 8000 --reload



