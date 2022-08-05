class Lend < ApplicationRecord
  belongs_to :user

  CATEGORIES = ['Road Bike', 'Mountain Bike', 'Touring Bike', 'Folding Bike', 'Fixed Gear', 'Track Bike', 'BMX', 'Recumbent Bike', 'Cruiser']

  validates :image_url, presence: true
  validates :description, presence: true
  validates :amount, presence: true
  validates :bike_type, inclusion: {
    in: CATEGORIES,
    message: "Must be one of: #{CATEGORIES.join(', ')}"
  }

end
