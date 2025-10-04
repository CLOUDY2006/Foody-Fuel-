import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const bestSellers = [
    {
      id: 1,
      name: "Pan Fried Paneer Momo",
      description: "Soft paneer and veggies wrapped in dumplings, steamed, then pan-fried for a crispy, golden finish. Served hot with spicy chutney!",
      price: "Rs.129",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npUJaugsXLjx32WXpj6FYB4wkBInY5tYAg6z5i7GNhe5UkrXldg44cOyEZoRXIWgfNvtTWnAYTOobUgPdEE1FcgsHr-2in_Z8HiF-f7xxFwK8sZcuHp_2n2WobZvxC-d7WtOWs=w243-h244-n-k-no-nu",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Chicken Cigar Rolls",
      description: "Crispy rolls stuffed with spiced chicken, fried to perfection, and served with a tangy dip!",
      price: "Rs.109",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrY_ua76kmaKA-14KcdWZtL1N3Ests4CdyUJ5Yd3XZWydc0XG2PseT8qNlXkBUirV54c2dtplYQDG5NW0IAxJ0zaHJEyNsAgF5RVdpWfGjueTyh-ZoJxeUOLAmq_KVFSbmCpXyoLxfU7Iw7=w243-h304-n-k-no-nu",
      badge: "Chef's Choice"
    },
    {
      id: 3,
      name: "Paneer Corn Kebab",
      description: "A delicious mix of soft paneer, sweet corn, and aromatic spices, shaped into kebabs and grilled to perfection for a flavorful, mouthwatering bite!",
      price: "Rs.99",
      image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np81G0SeQD0hH3pTBg24moaEmvEzhl3a-Ev9JLdfMsC_qIwUEBS9eyRewVXABs5QMpY6S8_67QRBJXmJDPUSX3dgVa2MapsyivOhs0i4DPgSXrhdIWhfyOkbpOuYQAiJBhqoS90_A=w243-h304-n-k-no-nu",
      badge: "Customer Favorite"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Food Bowl Image */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-orange-600">Foody Fuel</span>
              </h1>
              <p className="text-2xl text-orange-600 mb-6 font-medium">
                "Where Great Food Meets Great People"
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Serving delicious, fresh food that fuels your day. From our mobile kitchen to your taste buds, 
                we bring gourmet flavors to the streets and build lasting connections one meal at a time.
              </p>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700"
                onClick={() => onNavigate('about')}
              >
                Discover Our Story
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661257711676-79a0fc533569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZvb2QlMjBib3dsJTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzU4NzgyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Delicious food bowl from Foody Fuel"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What <span className="text-orange-600">Foody Fuel</span> Stands For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just about serving food - we're about creating experiences, building community, 
              and making great food accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-2 hover:border-orange-200 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Right Food, Right Price</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe everyone deserves access to delicious, high-quality food without breaking the bank. 
                Our pricing reflects our commitment to making gourmet accessible.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-200 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building a Food Family</h3>
              <p className="text-gray-600 leading-relaxed">
                Every customer becomes part of our extended family. We create connections through food, 
                fostering a sense of community wherever we park our truck.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-200 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Without Compromise</h3>
              <p className="text-gray-600 leading-relaxed">
                From sourcing the freshest ingredients to perfecting every recipe, we never compromise on quality. 
                Your satisfaction is our daily mission.
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join the Foody Fuel Family Today
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Experience the difference when passion meets flavor, and see why our customers keep coming back for more.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('feedback')}
            >
              Share Your Experience
            </Button>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Best Sellers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These crowd favorites keep our customers coming back for more. 
              Fresh ingredients, bold flavors, and unmatched quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-600">
                    {item.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-lg font-bold text-orange-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('menu')}
              className="mr-4"
            >
              View Full Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('feedback')}
            >
              Share Your Feedback
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Menu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-orange-600">Complete Menu</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the full range of delicious dishes we offer. From hearty mains to refreshing beverages, 
              there's something for every taste and craving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-md transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🥟</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Momo</h3>
              <p className="text-gray-600 text-sm">Hand-crafted momo with premium ingredients,served with spicy chutney</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-md transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🍹</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mocktails</h3>
              <p className="text-gray-600 text-sm">A refreshing,drink made with fresh ingredients, crafted to keep every sip special!</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-md transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Healthy Options</h3>
              <p className="text-gray-600 text-sm">Nutritious high protein kebabs for conscious eaters and non conscious eaters</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-md transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🌯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cigar rolls</h3>
              <p className="text-gray-600 text-sm">Crispy Cigar shaped rolls, made fresh to bring you a perfect, flavorful crunch!</p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700"
              onClick={() => onNavigate('menu')}
            >
              Browse Complete Menu
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fuel Your Hunger?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find us on the streets or follow our social media for daily locations and special menu items.
          </p>
         <Button
          size="lg"
          className="bg-orange-600 hover:bg-orange-700"
          onClick={() => {
          window.open("https://www.google.com/maps/dir//market,+opposite+Brindavan+society,+Sector+4,+Dwarka,+New+Delhi,+Delhi,+110075/@28.5977734,76.9664445,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1bc079e26415:0xea408489bb7a6f90!2m2!1d77.0488459!2d28.5977983?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D", "_blank");}}
>
  Find Our Location
</Button>
        </div>
      </section>
    </div>
  );
}