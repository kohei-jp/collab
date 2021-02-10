class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :last_name
      t.string :first_name
      t.string :user_name, null: false
      t.string :email, null: false
      t.string :hashed_password
      t.date :birthday
      t.string :gender
      t.string :number
      t.timestamps
    end
  end
end
