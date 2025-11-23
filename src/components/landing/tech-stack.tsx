export default function TechStack() {
  return (
    <section className="py-24 bg-background-light dark:bg-black/20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-deep-grey dark:text-white">Tech Stack</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-deep-grey/70 dark:text-white/60 font-soft">(2025-ready, scalable, AI-powered)</p>
        </div>
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">psychology</span>
                <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Artificial Intelligence & Machine Learning</h3>
              </div>
              <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
            </summary>
            <div className="details-content">
              <div className="px-6 pb-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 text-left">
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">ML Core</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Python, Scikit-learn, TensorFlow, PyTorch</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Advanced Models</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">XGBoost, LSTM, Transformer Networks</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Computer Vision</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">OpenCV, CNNs, YOLO for satellite & drone data</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Time Series & Forecasting</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Prophet, ARIMA</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">ML Serving & Pipelines</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Kubeflow, MLflow, Seldon Core</p></div>
              </div>
            </div>
          </details>
          <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">database</span>
                <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Data Engineering / Big Data</h3>
              </div>
              <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
            </summary>
            <div className="details-content">
              <div className="px-6 pb-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Data Lake + Warehousing</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">AWS S3, Google Cloud Storage, BigQuery, Snowflake</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">ETL / Pipelines</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Apache Airflow, Apache Spark, dbt</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Real-time Streaming</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Kafka, Spark Streaming, Flink</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Satellite Processing</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">GDAL, Rasterio, Dask for parallel processing</p></div>
              </div>
            </div>
          </details>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
              <summary className="flex items-center justify-between cursor-pointer p-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">dns</span>
                  <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Backend</h3>
                </div>
                <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
              </summary>
              <div className="details-content">
                <div className="px-6 pb-6 pt-0 space-y-4 text-left">
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Primary Backend</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Node.js (TypeScript), Go, Python (FastAPI)</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Database</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">PostgreSQL + PostGIS, ClickHouse, Redis</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Authentication</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Supabase Auth, JWT</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Storage</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">AWS S3, Cloudflare R2</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">APIs</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">REST, GraphQL, gRPC</p></div>
                </div>
              </div>
            </details>
            <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
              <summary className="flex items-center justify-between cursor-pointer p-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">devices</span>
                  <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Front-End / UX</h3>
                </div>
                <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
              </summary>
              <div className="details-content">
                <div className="px-6 pb-6 pt-0 space-y-4 text-left">
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Web App</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Next.js, Tailwind CSS, TypeScript</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Mobile App</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">React Native (shared components for iOS & Android)</p></div>
                </div>
              </div>
            </details>
          </div>
          <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">public</span>
                <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">GIS, Maps & Geo-Analytics</h3>
              </div>
              <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
            </summary>
            <div className="details-content">
              <div className="px-6 pb-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 text-left">
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Mapping Libs</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Mapbox GL JS, Leaflet, Turf.js</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Geo-Data Tools</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">QGIS, GeoPandas, Shapely</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">APIs & Scripts</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Google Maps Elevation API, Sentinel NDVI Indexing</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Supported Layers</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">NDVI, NDWI, EVI, Soil moisture</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Analytics Overlays</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Crop health segmentation, water stress</p></div>
              </div>
            </div>
          </details>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
              <summary className="flex items-center justify-between cursor-pointer p-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">cloud_sync</span>
                  <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">DevOps / Cloud</h3>
                </div>
                <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
              </summary>
              <div className="details-content">
                <div className="px-6 pb-6 pt-0 space-y-4 text-left">
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Cloud Platform</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">AWS, Google Cloud (multi-cloud)</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">CI/CD</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">GitHub Actions, GitLab CI</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Containerization</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Docker, Kubernetes</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Monitoring</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Prometheus, Grafana, OpenTelemetry</p></div>
                </div>
              </div>
            </details>
            <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
              <summary className="flex items-center justify-between cursor-pointer p-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">security</span>
                  <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Security</h3>
                </div>
                <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
              </summary>
              <div className="details-content">
                <div className="px-6 pb-6 pt-0 space-y-4 text-left">
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Access Control</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Supabase RLS, JWT + OAuth2</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Protection</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Rate limiting, AES-256 encryption, WAF</p></div>
                  <div><h4 className="font-bold text-deep-grey dark:text-white/90">Compliance</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">ISO 27001-ready, Govt-grade role separation</p></div>
                </div>
              </div>
            </details>
          </div>
          <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">monitoring</span>
                <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Visualization + BI</h3>
              </div>
              <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
            </summary>
            <div className="details-content">
              <div className="px-6 pb-6 pt-0 flex flex-wrap gap-x-8 gap-y-4 text-left">
                <span className="text-sm font-medium text-deep-grey/80 dark:text-white/70 bg-primary/10 dark:bg-light-green/10 px-3 py-1 rounded-full">Apache ECharts</span>
                <span className="text-sm font-medium text-deep-grey/80 dark:text-white/70 bg-primary/10 dark:bg-light-green/10 px-3 py-1 rounded-full">D3.js</span>
                <span className="text-sm font-medium text-deep-grey/80 dark:text-white/70 bg-primary/10 dark:bg-light-green/10 px-3 py-1 rounded-full">Metabase</span>
                <span className="text-sm font-medium text-deep-grey/80 dark:text-white/70 bg-primary/10 dark:bg-light-green/10 px-3 py-1 rounded-full">Grafana</span>
                <span className="text-sm font-medium text-deep-grey/80 dark:text-white/70 bg-primary/10 dark:bg-light-green/10 px-3 py-1 rounded-full">Kepler.gl</span>
              </div>
            </div>
          </details>
          <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">hub</span>
                <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">External Integrations</h3>
              </div>
              <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
            </summary>
            <div className="details-content">
              <div className="px-6 pb-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 text-left">
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Satellite Providers</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">ISRO Bhuvan, Sentinel, Landsat, MODIS</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Weather Data</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">IMD, OpenWeatherMap, Tomorrow.io</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Market Data</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">AgMarkNet, APMC APIs</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Financial Integrations</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Bank APIs, Aadhaar eKYC, Insurance APIs</p></div>
              </div>
            </div>
          </details>
          <details className="group bg-white dark:bg-deep-grey/20 rounded-xl shadow-lg shadow-black/[0.04] transition-all duration-300 hover:shadow-primary/20 dark:hover:shadow-primary/20">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary dark:text-light-green text-3xl">grain</span>
                <h3 className="text-xl font-bold font-heading text-deep-grey dark:text-white">Microservices Architecture</h3>
              </div>
              <span className="material-symbols-outlined text-deep-grey dark:text-white/70 transition-transform duration-300 plus-icon">add</span>
            </summary>
            <div className="details-content">
              <div className="px-6 pb-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Services</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">User Service, Geo-processing Service, Analytics Service, Notification Service</p></div>
                <div><h4 className="font-bold text-deep-grey dark:text-white/90">Event Bus</h4><p className="text-sm text-deep-grey/80 dark:text-white/70 font-soft mt-1">Kafka / Redpanda</p></div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
