var modifiedResponse = {
  "code": 0,
  "data": {
    "study_benefit": {
      "vip": {
        "type": 1,
        "expired_at": 1705061979000
      }
    },
    "answer_benefit": {
      "real_name_verify": {
        "status": -1,
        "ever_query": true,
        "re_auth": false
      },
      "show_status": 2
    }
  },
  "success": true,
  "msg": "success"
};

$done({response: {body: JSON.stringify(modifiedResponse)}});
