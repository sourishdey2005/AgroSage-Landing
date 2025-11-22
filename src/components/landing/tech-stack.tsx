import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techStack = [
    {
        title: "Artificial Intelligence & Machine Learning Stack",
        stacks: [
            {
                name: "ML Core",
                items: ["Python 3.11", "TensorFlow 2.16 / PyTorch 2.4", "scikit-learn", "XGBoost / LightGBM", "CatBoost", "HuggingFace Transformers"],
            },
            {
                name: "Advanced Models Used",
                items: ["Yield Prediction Models", "Crop Health Classification (CNN/ViT)", "Market Price Forecasting (LSTM, Temporal Fusion Transformer)", "Weather Prediction Models (Hybrid CNN-LSTM)", "Loan Credit Risk Models (Gradient Boosting + DeepTabular)", "Farmer Fraud Detection (Isolation Forest + Autoencoders)", "Satellite NDVI/NDWI Segmentation (U-Net / SegFormer)"],
            },
            {
                name: "Computer Vision for Satellite & Drone Data",
                items: ["Google Earth Engine API", "Rasterio / GDAL", "OpenCV", "SegFormer / U-Net++", "YOLOv10 for Crop & Pest Detection"],
            },
            {
                name: "Time Series & Forecasting",
                items: ["NeuralProphet", "Darts", "ARIMA / SARIMAX", "Temporal Fusion Transformers (TFT)"],
            },
            {
                name: "ML Serving & Pipelines",
                items: ["FastAPI ML microservices", "TorchServe", "TensorFlow Serving", "ONNX Runtime", "Ray Serve (scaling ML inference)", "MLFlow for experiment tracking"],
            },
        ],
    },
    {
        title: "Data Engineering / Big Data Stack",
        stacks: [
            { name: "Data Lake + Warehousing", items: ["Supabase Storage + Postgres (primary)", "DuckDB for local analytical queries", "ClickHouse for high-speed big-query analytics", "Apache Iceberg / Delta Lake (optional for scale)"] },
            { name: "ETL / Pipelines", items: ["Apache Airflow", "Dagster", "Prefect (great for modular flows)"] },
            { name: "Real-time Streaming", items: ["Kafka or Redpanda", "Supabase Realtime", "WebSocket streams"] },
            { name: "Satellite Processing Pipelines", items: ["Google Earth Engine", "SentinelHub API", "MODIS / Landsat Processors", "AWS Open Data Registry → Sentinel S3 buckets"] },
        ],
    },
    {
        title: "Backend Tech Stack",
        stacks: [
            { name: "Primary Backend", items: ["Node.js 20 (High-performance APIs)", "FastAPI (Python) for ML endpoints", "GoLang Microservices for high-speed tasks"] },
            { name: "Database", items: ["Supabase Postgres (Main DB)", "TimescaleDB (Time-series weather/agri data)", "Redis (Caching + Realtime events)", "ElasticSearch (Search engine)", "Neon Postgres (Optional serverless DB)"] },
            { name: "Authentication & Authorisation", items: ["Supabase Auth", "Role-based Access (Farmer / Agent / Bank / Government)", "JWT", "Row-Level Security (RLS)"] },
            { name: "Storage", items: ["Supabase Storage (Docs, images, farm reports)", "AWS S3 Satellite Tiles", "CDN via Cloudflare"] },
            { name: "APIs", items: ["GraphQL via Hasura", "REST via FastAPI / Node", "gRPC between microservices"] },
        ]
    },
    {
        title: "Front-End / UX Stack",
        stacks: [
            { name: "Web App", items: ["Next.js 15 (App Router)", "React 19", "TailwindCSS 4", "ShadCN/UI", "Framer Motion (animations)", "Recharts / Apache ECharts", "Mapbox GL (interactive farm maps)", "three.js (3D India map)"] },
            { name: "Advanced UI", items: ["React Query + Zustand (state management)", "SWR for data caching", "TanStack Table for big analytics grids"] },
            { name: "Mobile App", items: ["React Native", "OR", "Flutter 3.22", "(Choose React Native for shared components with web.)"] },
        ]
    },
    {
        title: "GIS, Maps & Geo-Analytics Stack",
        stacks: [
            { name: "GIS Libraries/Tools", items: ["Mapbox GL JS", "Leaflet", "Turf.js", "Google Maps Elevation API", "QGIS for internal agronomist use", "GeoPandas", "Shapely", "Sentinel NDVI Indexing Scripts"] },
            { name: "GIS supports", items: ["NDVI", "NDWI", "EVI", "Soil moisture layers", "Crop health segmentation overlays"] },
        ]
    },
    {
        title: "DevOps / Cloud / Deployment Stack",
        stacks: [
            { name: "Cloud Platform", items: ["AWS (recommended)", "EC2", "Lambda", "S3", "ECR", "ECS / Fargate", "CloudWatch", "API Gateway", "Or DigitalOcean if budget smaller."] },
            { name: "CI/CD", items: ["GitHub Actions", "Supabase Deploy Hooks", "Docker for microservices"] },
            { name: "Containerisation", items: ["Docker", "Kubernetes (EKS)", "Helm Charts"] },
            { name: "Monitoring", items: ["Prometheus", "Grafana Dashboards", "OpenTelemetry"] },
        ]
    },
    {
        title: "Security Stack",
        stacks: [
            { name: "Security Measures", items: ["Supabase Row-Level Security (core)", "JWT + OAuth2", "Rate limiting with Nginx", "AES-256 encryption for stored data", "WAF via Cloudflare", "Real-time log monitoring (ELK stack)"] },
            { name: "Compliance", items: ["ISO 27001-ready architecture", "Government-grade role separation"] },
        ]
    },
    {
        title: "Visualisation + BI Stack",
        stacks: [
            { name: "Libraries & Tools", items: ["Apache ECharts", "D3.js", "Metabase (internal)", "Grafana", "Kepler.gl (geo-spatial visualisation)"] },
        ]
    },
    {
        title: "External Integrations",
        stacks: [
            { name: "Satellite Providers", items: ["ISRO Bhuvan", "Sentinel", "Landsat", "MODIS"] },
            { name: "Weather Data", items: ["IMD", "OpenWeatherMap", "Tomorrow.io"] },
            { name: "Market Data", items: ["AgMarkNet", "APMC APIs"] },
            { name: "Financial Integrations", items: ["Bank APIs (PSB, SBI, ICICI)", "Aadhaar eKYC (if allowed)", "Crop Insurance APIs"] },
        ]
    },
    {
        title: "Microservices Architecture",
        stacks: [
            { name: "Services", items: ["Yield Prediction Service (Python + ML)", "Pricing Forecast Service (TFT)", "Weather Analytics Service", "Satellite Data Service (Earth Engine)", "Credit Risk Engine (XGBoost + Deep Tabular)", "Government Policy AI Insights Service", "Agent Field Verification Service", "Notification Service (SMS/WhatsApp)", "Real-Time Map Service (Node + Mapbox)"] },
            { name: "Event Bus", items: ["Kafka/Redpanda internal communication"] },
        ]
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="bg-muted">
            <div className="container mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Our Technology Stack
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        The powerful and scalable technologies that drive AgroSage.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {techStack.map((category, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="font-headline text-xl">{category.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                {category.stacks.map((stack, stackIndex) => (
                                    <Card key={stackIndex} className="bg-background/50">
                                        <CardHeader>
                                            <CardTitle className="font-body text-lg font-semibold">{stack.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                {stack.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
