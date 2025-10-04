import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuPageProps {
  onNavigate: (page: string) => void;
}

export function MenuPage({ onNavigate }: MenuPageProps) {
  const menuCategories = [
    {
      category: "Mains",
      items: [
        {
          id: 1,
          name: "Pan Fried Momo ",
          description: "Soft paneer/veggies/chicken wrapped in dumplings, steamed, then pan-fried for a crispy, golden finish. Served hot with spicy chutney!",
          price: "Rs.129",
          image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npUJaugsXLjx32WXpj6FYB4wkBInY5tYAg6z5i7GNhe5UkrXldg44cOyEZoRXIWgfNvtTWnAYTOobUgPdEE1FcgsHr-2in_Z8HiF-f7xxFwK8sZcuHp_2n2WobZvxC-d7WtOWs=w243-h244-n-k-no-nu",
          badge: "Most Popular",
          dietaryInfo: ["Paneer", "Soya" , "Chicken"]
        },
        {
          id: 2,
          name: "Steam Momo",
          description: "Soft, juicy dumplings filled with fresh veggies or meat, steamed to perfection and served hot with flavorful chutney!",
          price: "Rs.69",
          image:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4npeoRIDoSH3yQJTGU9teKmOeYC81qU98wdBoi7b92rJ-59Wf2rqpIxzru7QZjpLyb4msGdPaUmoBaz8bn_c9QwDxQiLxfztx1s484kNHqCZWc-Zz3URI1CwTpeVOqqvBBTZkPOebw=w243-h406-n-k-no-nu",
          badge: "Chef's Special",
          dietaryInfo: ["Paneer", "Soya" , "Chicken"]
        },
        {
          id: 3,
          name: "Kurkure Momo",
          description: "Crunchy, spicy momos with a crispy coating, filled with savory goodness and served hot for a tasty, addictive snack!",
          price: "Rs.129",
          image:"https://lh3.googleusercontent.com/p/AF1QipMADmQGLKd2Bd4Z8gFiDgdpEZ0e3dKoHvHB-HRF=w243-h406-n-k-no-nu",
          badge: "Signature Dish",
          dietaryInfo: ["Paneer", "Soya" , "Chicken"]
        },
        {
          id: 4,
          name: "Classic French Fries",
          description: "Crispy, golden potato fries, perfectly seasoned and served hot, making every bite a deliciously satisfying snack or side!",
          price: "Rs.79",
          image: "data:image/jpeg;base64,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",
          badge: "Crispy Snack",
          dietaryInfo: ["Snack"]
        },
        {
          id: 6,
          name: "Peri Peri French Fries ",
          description: "Crispy golden fries tossed in spicy, tangy peri-peri seasoning, served hot for a bold and flavorful bite!",
          price: "Rs.89",
          image: "data:image/jpeg;base64,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",
          badge: "Crispy Snack",
          dietaryInfo: ["Snack"]
        },
      ]
    },
    {
      category: "Light Bites",
      items: [
        {
          id: 7,
          name: "Paneer Corn Kebab",
          description: "A delicious mix of soft paneer, sweet corn, and aromatic spices, shaped into kebabs and grilled to perfection for a flavorful, mouthwatering bite!",
          price: "Rs.99",
          image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npuqPopEIVknfore92EOnilAnqgXNdBDBv6vGoIc-CnOsH8cRpJzYcTkHG1BedwVEJg5VYEXFjiN3P22mRZvlyFGoC2Z1AXiO-vz5ntBjpO_l6jSKfY7-tRiUj8sYqyv2CqW6mtKiRvYrU=w243-h304-n-k-no-nu",
          badge: "Customer Choice",
          dietaryInfo: ["Vegetarian", "High Protein"]
        },
        {
          id: 8,
          name: "Beetroot Kebab",
          description: "Flavorful beetroot blended with spices, shaped into kebabs, and grilled to perfection for a healthy, delicious bite!",
          price: "Rs.99",
          image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrxDXpvr_-uWwzVB94yMFKYoTeDZ_bx2ETK15Ce25FH1MnfG7D2Lm4vYKpKYiSkoXcBOmxG5cJ224tZ8TQFVAmpUroLgqXATlJQLQo3Z1V1M3nlDOJ-KditI8V7Ttm-4-YBnxVY=w243-h406-n-k-no-nu",
          badge: "High Protein",
          dietaryInfo: ["Vegetarian", "High Protein"]
        },
        {
          id: 9,
          name: "Veg Cigar Roll",
          description: "Crispy rolls stuffed with spiced mixed vegetables, fried to golden perfection for a crunchy, flavorful snack!",
          price: "Rs.99",
          image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nro-wFlVEzwixM7hxVJJJk2ZATkWxb85o_f4EJ3QacOFJKXyYVFWPHeW68UmAIQDLlrOxLdqPR4pqY6LPPbL_1Z2k50cOQdMp_EQmB5gneA8NT_jWxj7ZunO5RpqX0wrqFkxOpB=s1360-w1360-h1020-rw",
          badge: "Chef's Choice",
          dietaryInfo: ["Vegetarian", "High Protein"]
        },
        {
          id: 10,
          name: "Chicken Cigar Roll",
          description: "Crispy rolls filled with spiced chicken, fried to golden perfection for a savory, crunchy treat!",
          price: "Rs.99",
          image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrY_ua76kmaKA-14KcdWZtL1N3Ests4CdyUJ5Yd3XZWydc0XG2PseT8qNlXkBUirV54c2dtplYQDG5NW0IAxJ0zaHJEyNsAgF5RVdpWfGjueTyh-ZoJxeUOLAmq_KVFSbmCpXyoLxfU7Iw7=w243-h304-n-k-no-nu",
          badge: "Chef's Choice",
          dietaryInfo: ["Non-Vegetarian", "High Protein"]
        },
      ]
    }
  ];

  const beverages = [
    { name: "Virgin Mojito", price: "Rs.89", description: "A refreshing blend of mint, lime, and soda, crafted to keep every sip cool and special!" },
    { name: "Blue Lagoon", price: "Rs.99", description: "A vibrant, refreshing mocktail with fruity flavors and a zesty twist, perfect for a cool, uplifting sip!" },
    { name: "Classic Cold Coffee", price: "Rs.79", description: "Smooth, chilled coffee blended with milk and a touch of sweetness, perfect for a refreshing energy boost!" },
    { name: "Vanilla Cold Coffee", price: "Rs.89", description: "Creamy, chilled coffee infused with rich vanilla flavor, served sweet and refreshing for a perfect treat!" }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-600">Menu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hearty mains to sweet treats, every dish is crafted with passion using the freshest ingredients. 
            Taste the difference that quality makes.
          </p>
        </div>

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item) => (
                <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-600">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                          <span className="text-xl font-bold text-orange-600">{item.price}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.dietaryInfo.map((info, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {info}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Beverages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Beverages & Refreshments
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beverages.map((beverage, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">{beverage.name}</h4>
                <p className="text-orange-600 font-bold text-lg mb-2">{beverage.price}</p>
                <p className="text-gray-600 text-sm">{beverage.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Daily Specials Available!
          </h3>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Follow us on social media for today's special dishes and combo deals. 
            Fresh surprises every day from Chef!
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate('feedback')}
          >
            Share Your Favorite Dish
          </Button>
        </div>

        {/* Menu Notes */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Menu Notes</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">🌱 Dietary Options</h4>
              <p className="text-sm">We offer vegetarian, and vegan alternatives for most dishes. Please ask our staff about customizations.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">🕒 Availability</h4>
              <p className="text-sm">Menu items may vary based on seasonal ingredients and daily specials. Follow us for real-time updates!</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">🥗 Fresh Ingredients</h4>
              <p className="text-sm">We source our ingredients daily from local farms and suppliers to ensure maximum freshness and support our community.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">👨‍🍳 Chef's Recommendations</h4>
              <p className="text-sm">Don't miss our daily specials! Chef creates unique dishes based on seasonal availability and inspiration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}