# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

session_token = User.generate_unique_secure_token
User.destroy_all
User.create({username: "guest-user", email: "the_guest@my_house.com", password: "1Y4xNQBhe1KS8vOJpHdB9A", session_token: session_token})

100.times do
  name = Faker::Name.name
  username = Faker::Internet.user_name(name)
  email = Faker::Internet.email(name)
  password = "supersecret"
  session_token = User.generate_unique_secure_token
  user = User.create!({username: username, email: email, password: password,  session_token: session_token})
end


Question.destroy_all
420.times do
  title = Faker::Hipster.sentences(1)[0]
  body = Faker::Hipster.paragraphs(rand(3)+3)[0]
  author_id = User.all.sample.id
  created_at = Faker::Date.between(1.year.ago, Date.today)
  updated_at = created_at
  Question.create!({title: title, body: body, author_id: author_id, created_at: created_at, updated_at: updated_at })
end


Answer.destroy_all
1600.times do
  body = Faker::Hipster.paragraphs(rand(4)+3)[0]
  author_id = User.all.sample.id
  question_id = Question.all.sample.id
  Answer.create!({body: body, author_id: author_id, question_id: question_id })
end
