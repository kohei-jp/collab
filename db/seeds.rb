# frozen_string_literal: true

3.times do |n|
  user = User.new(
    last_name: "last_#{n}",
    first_name: "first_#{n}",
    user_name: "user_name_#{n}",
    email: "test#{n}@gmail.com"
  )
  user.save!
end
