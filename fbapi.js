axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAIzhvervZBJZACYIdZBV9TMZAVWQyDRcnxvQzzIH6ivCSVd4bLeprsH9FXoKkNAJDkuDkT9NFUMIZCqZBadky92SwM7EoaOYKLhbccJQlpCO2VCAqVq6bQv8Xp8k53qHmVlS8TPvJ0wQsyc6h8OUxZCysoDmaEg6wZDZD')
        .then(response => {
            var output = "";
            output += " <span>Thông tin bài viết số 1</span> </br> Content: " +
            response.data.data[0].message + "<br>" +
            "<span>Thông tin bài viết số 2</span> </br> Content: " +
            response.data.data[1].message + "<br>" +
            "<span>Thông tin bài viết số 3</span> </br> Content: " +
            response.data.data[2].message;

            document.getElementById('fb').innerHTML = output;
        })
        .catch(error => console.error(error))