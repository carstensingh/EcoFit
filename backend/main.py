from flask import Flask, request, jsonify
from databaseClient import DatabaseClient

app = Flask(__name__)
dbClient = DatabaseClient()

@app.route("/get_sustainable_alternatives", methods=["POST"])
def get_sustainable_alternatives():
  data = request.get_json()
  base64_image = data["base64image"]
  results = dbClient.query_image(base64_image)

  result_arr = []
  for r in results:
    result_dict = {}
    result_dict["image_link"] = r["image_name"]
    result_dict["company_name"] = r["company_name"]
    result_dict["image_data"] = r["imageBase64"]
    result_arr.append(result_dict)

  return jsonify(result_arr), 200

if __name__ == "__main__":
  app.run(debug=True)