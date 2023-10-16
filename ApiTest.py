import requests as rq

url = 'http://bentont.pythonanywhere.com/'


data = {'lessonTitle': "Example Title", 
        "lessonPlan": "This is a lesson plan. Step one:"}
headers = {
    'Content-Type': 'application/json',  # This is a common content type for JSON APIs.
    # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',  # Uncomment this line if your API requires an access token.
}

# response = rq.get(url, params=data)
response = rq.post(url, json=data, headers=headers)

# If you expect a JSON response, you can also extract it as a Python dictionary.
if response.status_code == 200:  # HTTP Status OK
    json_response = response.json()
    print(response.text)
else:
    # If the request was not successful, the server's response can be printed like this:
    print('Error:', response.text)

