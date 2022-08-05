class User < ApplicationRecord
  has_secure_password

  has_many :lends

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, uniqueness: true
  validates :password, length: {in: 6..20}
  
end
