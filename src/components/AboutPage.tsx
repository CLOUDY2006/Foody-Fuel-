import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">Foody Fuel</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a passion for great food and the dream of bringing gourmet flavors to the streets
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://lh3.googleusercontent.com/p/AF1QipNIpF1eMyxgHLO7nBI3GT7tchLiqMA26bC4v6D-=w243-h406-n-k-no-nu"
              alt="Foody Fuel food truck"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mobile Kitchen</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as a simple dream in 2025 has evolved into one of the city's most beloved food trucks. 
              Our custom-built mobile kitchen allows us to bring fresh, hot, delicious meals directly to you, 
              wherever you are.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that great food shouldn't be confined to traditional restaurants. That's why we take 
              our passion for cooking on the road, serving up gourmet meals from our fully-equipped food truck 
              at festivals, office parks, and street corners throughout the city.
            </p>
          </div>
        </div>

        {/* Owner Section */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Chef Karan</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Chef is the heart and soul behind Foody Fuel. With over 7 glass breaking years of culinary 
                    experience in top household across the country, he decided to bring his expertise to 
                    the streets in 2025.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    "I wanted to create a place where everyone could enjoy restaurant-quality food without 
                    the formal atmosphere," says Chef. "Food trucks give us the freedom to connect with 
                    our community and serve happiness one meal at a time."
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    When he's not in the kitchen, Chef can be found experimenting with new recipes, 
                    sourcing ingredients from local farms, and planning the next location for Foody Fuel 
                    to spread joy through food.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <ImageWithFallback
                    src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqMkzcflskct4HQnGWtzHG3_b-p_peXxqR4y_8sSwrvsDWUWI7q_EWzCvpuq-Zvo8otQsyqBedC4rMEf9MQ04CL-v7PuRkFFQi7k7ohk0XPLXSYUGFUEcuR1wzyKeBWd06NBMY=w243-h244-n-k-no-nu"
                    alt="Chef cooking"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Foody Fuel, we're more than just a food truck. We're a mobile community hub that brings 
            people together through exceptional food. Our mission is to serve fresh, flavorful meals 
            made with locally-sourced ingredients while creating memorable experiences that fuel both 
            body and soul.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh Ingredients</h3>
            <p className="text-gray-600">
              We source our ingredients daily from local farms and suppliers to ensure maximum freshness and quality.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community First</h3>
            <p className="text-gray-600">
              We believe in giving back to our community and supporting local events, charities, and causes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              Every dish is prepared with passion and attention to detail, ensuring an exceptional dining experience.
            </p>
          </div>
        </div>

        {/* Location Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
            onClick={() => {
              window.open("https://www.google.com/maps/dir//market,+opposite+Brindavan+society,+Sector+4,+Dwarka,+New+Delhi,+Delhi,+110075/@28.5977734,76.9664445,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1bc079e26415:0xea408489bb7a6f90!2m2!1d77.0488459!2d28.5977983?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D", "_blank");
            }}
          >
            Find Our Location
          </Button>
        </div>
        
      </div>
    </div>
  );
}