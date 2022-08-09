class V1::ThingsController < ApplicationController
  def index
    render json: { greetings: Greeting.all.sample.message }.to_json
  end
end
