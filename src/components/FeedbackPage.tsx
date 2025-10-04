import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const existingFeedback = [
    {
      id: 1,
      name: "Kabir Bhandari",
      rating: 5,
      message: "Absolutely incredible! The momos was the best I've ever had. Chef Karan really knows what he's doing. Will definitely be back!",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Dalia Lama",
      rating: 5,
      message: "Found Foody Fuel at the downtown festival and was blown away. The kebab were fresh and perfectly seasoned. Great service too!",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 4,
      message: "The fries was amazing - crispy and fresh. Only downside was the wait time, but totally worth it. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "Virat Kohli",
      rating: 5,
      message: "I'm a regular customer now! The quality is consistently excellent and the staff is always friendly. Love supporting this local business.",
      date: "3 weeks ago"
    },
    {
      id: 5,
      name: "Shashi Tharoor",
      rating: 5,
      message: "Had Foody Fuel cater our office lunch - everyone was raving about the food! Professional service and delicious meals. Thank you!",
      date: "1 month ago"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", rating: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer <span className="text-orange-600">Feedback</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We love hearing from our customers! Your feedback helps us continue to improve and serve you better.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Existing Feedback */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
            <div className="space-y-6">
              {existingFeedback.map((feedback) => (
                <Card key={feedback.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-orange-100 text-orange-600">
                          {feedback.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{feedback.name}</h3>
                          <Badge variant="secondary" className="text-sm">
                            {feedback.date}
                          </Badge>
                        </div>
                        <div className="flex items-center mb-3">
                          {renderStars(feedback.rating)}
                          <span className="ml-2 text-sm text-gray-600">({feedback.rating}/5)</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{feedback.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Feedback Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Share Your Experience</h2>
            <Card>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your feedback has been submitted successfully. We appreciate your input!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="rating">Rating *</Label>
                      <select
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select a rating</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent (5/5)</option>
                        <option value="4">⭐⭐⭐⭐ Very Good (4/5)</option>
                        <option value="3">⭐⭐⭐ Good (3/5)</option>
                        <option value="2">⭐⭐ Fair (2/5)</option>
                        <option value="1">⭐ Poor (1/5)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Your Feedback *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your experience with Foody Fuel..."
                        className="mt-1 min-h-32"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      size="lg"
                    >
                      Submit Feedback
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-2 text-gray-600">
                <p>📧 Email: hello@foodyfuel.com</p>
                <p>📱 Phone: (555) 123-FUEL</p>
                <p>📍 Follow us on social media for daily locations</p>
                <p>🕒 Hours: Monday-Saturday 11AM-9PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}