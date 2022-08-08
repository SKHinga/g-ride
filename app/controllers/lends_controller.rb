class LendsController < ApplicationController
  skip_before_action :authorized, only: [:index, :create, :show]
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index
    lend = Lend.all
    render json: lend, status: :ok
  end

  def create
    lend = Lend.create(lend_params)
    render json: lend, status: :accepted
  end

  def show
    current_lend =  Lend.find(params[:id])
    render json: current_lend, status: :ok
  end


  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def lend_params
    params.permit(:user_id, :bike_type, :from, :to, :image_url, :amount, :description)
  end
end
