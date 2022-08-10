class LendSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :image_url, :bike_type, :amount, :from, :to, :description
end
