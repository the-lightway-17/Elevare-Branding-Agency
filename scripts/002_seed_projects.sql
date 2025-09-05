-- Insert sample projects
INSERT INTO public.projects (title, client, description, image_url, duration, services, results) VALUES
(
  'Modern Tech Startup Branding',
  'TechFlow Solutions',
  'Complete brand identity design for a cutting-edge fintech startup, including logo design, color palette, typography system, and brand guidelines.',
  '/modern-tech-startup-branding.jpg',
  '6 weeks',
  ARRAY['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Digital Assets'],
  '{"brand_recognition": "85% increase", "user_engagement": "120% boost", "market_presence": "Expanded to 3 new markets"}'::jsonb
),
(
  'Premium Coffee Packaging Design',
  'Artisan Roasters Co.',
  'Luxury packaging design for premium coffee blends, featuring sustainable materials and elegant typography that reflects the artisanal quality.',
  '/premium-coffee-packaging-design.jpg',
  '4 weeks',
  ARRAY['Package Design', 'Brand Identity', 'Print Design', 'Sustainability Consulting'],
  '{"sales_increase": "45% growth", "shelf_appeal": "Premium positioning achieved", "sustainability": "100% recyclable packaging"}'::jsonb
),
(
  'Luxury Fashion Brand Identity',
  'Noir Couture',
  'Sophisticated brand identity for a high-end fashion house, encompassing logo design, brand book, and luxury retail experience design.',
  '/luxury-fashion-brand-identity.jpg',
  '8 weeks',
  ARRAY['Brand Identity', 'Logo Design', 'Retail Design', 'Brand Strategy'],
  '{"brand_value": "200% increase", "retail_footprint": "5 flagship stores", "customer_loyalty": "90% retention rate"}'::jsonb
),
(
  'Smart Home IoT Product Design',
  'ConnectHome',
  'User-centered product design for smart home devices, including industrial design, user interface, and comprehensive brand ecosystem.',
  '/smart-home-iot-product-design.jpg',
  '12 weeks',
  ARRAY['Product Design', 'UI/UX Design', 'Brand Identity', 'Industrial Design'],
  '{"market_share": "15% in first year", "user_satisfaction": "4.8/5 rating", "awards": "3 design awards won"}'::jsonb
);
