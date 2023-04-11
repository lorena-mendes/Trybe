import requests

URL_BASE = "https://api.github.com/users"

response = requests.get(URL_BASE)

users = response.json()
for user in users:
    print(f"{user['login']} {user['url']}")
