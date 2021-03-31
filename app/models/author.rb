class Author < ApplicationRecord
  has_many :projects
  has_one_attached :resume
end
