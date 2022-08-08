class V1::ThingsController <ApplicationController
  def index
    render json: { :greetings => 
      {
      ['Hello!', 'Salutations', 'Hola', 'Heyo!', 'HI!']
    }
     }.to_json
  end
end