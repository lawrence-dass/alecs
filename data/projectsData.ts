interface Project {
  title: string
  title_extra?: string
  id?: string
  description: string
  href: string
  imgSrcDark: string
  imgSrcLight: string
  detail: string
  features?: { title: string; description: string }[]
  contribution?: { title: string; description: string }[]
  company?: string
  tags: string[]
  url: string
}

const projectsData: Project[] = [
  {
    title: 'Luxury Escapes Sales Recovery',
    // title_extra: 'Google Ads Campaign Optimization',
    id: 'luxury-escapes-sales-recovery',
    description: `Strategic Google Ads campaign optimization initiative that transformed Luxury Escapes' digital marketing performance, driving exceptional sales growth through targeted keyword strategy and systematic campaign restructuring. This project achieved a remarkable 1,322% sales increase within the first two weeks, scaling from $900K to $12.8M through strategic search campaign optimization and sustained biweekly campaign management over a two-year period.`,
    detail:
      'As an Analyst at Google Operations Centre, I led the Luxury Escapes Sales Recovery project, a comprehensive digital marketing transformation initiative that addressed declining sales performance through strategic Google Ads optimization. Prior to implementation, the client was generating $900K in sales with underperforming search campaigns that lacked strategic keyword targeting and optimized campaign structure. I developed and executed a systematic approach focusing on deal-specific campaign architecture, strategic keyword integration, and comprehensive account optimization. The implementation involved creating biweekly campaign structures for new deals, strategically incorporating high-converting keywords like "deals," "prices," and "discounts" into existing and newly created ad groups, and conducting thorough account audits to identify optimization opportunities. The results were transformative - within the first two weeks, sales skyrocketed from $900K to $12.8M, representing a 1,322% increase. The success led to a sustained two-year partnership from Q4 2021 to Q3 2023, with ongoing biweekly campaign optimization ensuring continued performance excellence and market leadership in the luxury travel sector.',
    features: [
      {
        title: 'Strategic Campaign Architecture',
        description:
          'Biweekly campaign structure development for new deals, ensuring optimal organization and targeted messaging for maximum conversion potential.',
      },
      {
        title: 'High-Converting Keyword Strategy',
        description:
          'Strategic integration of performance-driven keywords including "deals," "prices," and "discounts" across existing and newly created ad groups to capture high-intent traffic.',
      },
      {
        title: 'Comprehensive Account Auditing',
        description:
          'Systematic evaluation of overall account performance, identifying optimization opportunities and implementing strategic improvements across all campaign elements.',
      },
      {
        title: 'Biweekly Optimization Cycles',
        description:
          'Structured two-week optimization cycles ensuring continuous performance improvement, rapid response to market changes, and sustained competitive advantage.',
      },
      {
        title: 'Deal-Specific Targeting',
        description:
          'Customized campaign targeting aligned with specific luxury travel deals, maximizing relevance and conversion rates for each promotional offer.',
      },
      {
        title: 'Performance Monitoring Dashboard',
        description:
          'Real-time tracking of key metrics including sales conversion, click-through rates, cost-per-acquisition, and return on ad spend across all campaigns.',
      },
      {
        title: 'Scalable Campaign Framework',
        description:
          'Flexible campaign structure designed to accommodate rapid scaling, seasonal variations, and new product launches while maintaining performance standards.',
      },
      {
        title: 'Competitive Positioning Strategy',
        description:
          'Market-aware keyword and bidding strategies that positioned Luxury Escapes advantageously against competitors in the luxury travel space.',
      },
    ],
    contribution: [
      {
        title: 'Strategic Problem Analysis & Solution Design',
        description:
          'Conducted comprehensive analysis of underperforming Google Ads campaigns, identifying critical gaps in keyword strategy and campaign structure. Developed a systematic optimization approach focusing on high-impact areas including deal-specific targeting, keyword enhancement, and account restructuring to maximize sales recovery potential.',
      },
      {
        title: 'Campaign Architecture Development',
        description:
          'Designed and implemented a robust biweekly campaign creation framework for new deals, ensuring optimal organization and strategic messaging. Created scalable templates and processes that enabled rapid deployment of high-performing campaigns while maintaining consistency and quality standards.',
      },
      {
        title: 'Advanced Keyword Strategy Implementation',
        description:
          'Strategically integrated high-converting keywords including "deals," "prices," and "discounts" across existing and newly created ad groups. Applied keyword research and competitive analysis to identify optimal terms that would capture high-intent luxury travel shoppers and drive immediate sales conversions.',
      },
      {
        title: 'Comprehensive Account Optimization',
        description:
          'Conducted thorough account audits identifying optimization opportunities across campaign structure, bidding strategies, ad copy, and targeting parameters. Implemented systematic improvements that enhanced overall account performance and established foundation for sustained growth.',
      },
      {
        title: 'Performance Transformation Leadership',
        description:
          'Led the dramatic sales transformation from $900K to $12.8M within the first two weeks, representing a 1,322% increase through strategic campaign optimization. Established performance benchmarks and optimization protocols that ensured continued success throughout the engagement.',
      },
      {
        title: 'Long-term Partnership Management',
        description:
          'Successfully managed a two-year strategic partnership from Q4 2021 to Q3 2023, implementing biweekly optimization cycles that maintained performance excellence. Developed sustainable processes for ongoing campaign management, seasonal adjustments, and continuous improvement initiatives.',
      },
      {
        title: 'Cross-functional Collaboration',
        description:
          'Coordinated with Google Operations Centre teams, client stakeholders, and external partners to ensure seamless campaign execution and optimization. Established clear communication protocols and reporting frameworks that maintained alignment and transparency throughout the engagement.',
      },
      {
        title: 'Results Documentation & Strategic Insights',
        description:
          'Created comprehensive documentation of optimization strategies, performance metrics, and strategic insights that served as a model for future client engagements. Developed best practices and methodologies that could be applied to similar luxury travel and e-commerce optimization projects.',
      },
    ],

    imgSrcLight: '/static/images/projects/luxury_escapes_recovery_light.png',
    imgSrcDark: '/static/images/projects/luxury_escapes_recovery_dark.png',
    href: '/projects/luxury-escapes-sales-recovery',
    company: 'Google Operations Centre',
    tags: [
      'google-ads',
      'digital-marketing',
      'campaign-optimization',
      'keyword-strategy',
      'sales-recovery',
      'performance-marketing',
      'conversion-optimization',
      'account-management',
      'strategic-analysis',
      'luxury-travel',
      'e-commerce',
      'roi-optimization',
      'search-marketing',
      'competitive-analysis',
      'client-partnership',
      'results-driven',
    ],
    url: '#',
  },
  {
    title: 'BCFM/Christmas Seasonal Campaign',
    // title_extra: 'Home Linens Marketing Optimization',
    id: 'home-linens-seasonal-campaign',
    description: `Strategic seasonal marketing campaign for Home Linens Retail Group targeting Black Friday/Cyber Monday and Christmas peak periods through comprehensive Google Ads optimization. This initiative delivered exceptional results including 100% sales target achievement and 81% order volume increase within a single quarter through innovative Performance Max campaigns, creative asset development, and strategic remarketing initiatives for underperforming product categories.`,
    detail:
      'As Digital Marketing and E-commerce Manager at Home Linens Retail Group, I led the BCFM/Christmas seasonal marketing campaign, a comprehensive digital marketing initiative designed to maximize revenue during the peak holiday shopping period. Prior to implementation, certain product categories were underperforming during crucial seasonal periods, particularly lower-tier home textile products that required strategic positioning to capture holiday shoppers. I developed and executed a multi-faceted approach focusing on Performance Max campaigns with search theme targeting for low-performing categories, comprehensive creative asset development including seasonal images and videos, and strategic remarketing campaigns specifically designed to drive sales for underperforming product lines. The implementation involved systematic campaign restructuring, targeted seasonal messaging, and advanced audience segmentation to maximize conversion potential during the critical Q4 shopping period. The results were outstanding - we achieved 100% of our ambitious sales targets while increasing order volumes by 81% within the quarter. The success established new benchmarks for seasonal campaign performance and provided a scalable framework for future holiday marketing initiatives, demonstrating the power of strategic campaign optimization combined with compelling creative assets.',
    features: [
      {
        title: 'Performance Max Campaign Strategy',
        description:
          'Advanced Performance Max campaigns with search theme targeting specifically designed for low-performing home textile categories, maximizing reach across all Google properties.',
      },
      {
        title: 'Seasonal Creative Asset Development',
        description:
          'Comprehensive creation of festive seasonal assets including high-quality images and engaging video content tailored for BCFM and Christmas shopping motivations.',
      },
      {
        title: 'Strategic Remarketing Campaigns',
        description:
          'Targeted remarketing initiatives designed to re-engage previous visitors and drive conversions for underperforming product categories during peak shopping periods.',
      },
      {
        title: 'Brand Campaign Optimization',
        description:
          'Enhanced brand campaigns specifically focused on promoting lower-tier products through strategic positioning and compelling seasonal messaging.',
      },
      {
        title: 'Search Theme Targeting',
        description:
          'Sophisticated search theme implementation ensuring optimal product visibility for seasonal queries and holiday shopping intent keywords.',
      },
      {
        title: 'Category-Specific Optimization',
        description:
          'Tailored campaign strategies for different home linen categories including bedding, towels, curtains, and seasonal decor items.',
      },
      {
        title: 'Creative Performance Monitoring',
        description:
          'Real-time tracking and optimization of creative asset performance, enabling rapid iteration and improvement of underperforming elements.',
      },
      {
        title: 'Cross-Channel Integration',
        description:
          'Seamless integration across Google Ads, Bing, and social media channels to maximize reach and frequency during the critical holiday shopping window.',
      },
    ],
    contribution: [
      {
        title: 'Strategic Campaign Planning & Execution',
        description:
          'Developed comprehensive seasonal marketing strategy targeting BCFM and Christmas periods, identifying key opportunities in underperforming categories. Created detailed campaign roadmap with clear objectives including 100% sales target achievement and significant order volume growth through strategic Performance Max implementation.',
      },
      {
        title: 'Performance Max Campaign Development',
        description:
          'Designed and implemented sophisticated Performance Max campaigns with search theme targeting specifically for low-performing home textile categories. Utilized advanced audience signals and product feeds to maximize visibility and conversion potential across all Google properties during peak shopping periods.',
      },
      {
        title: 'Creative Asset Strategy & Production',
        description:
          'Led comprehensive creative asset development including seasonal images and engaging video content tailored for holiday shopping motivations. Coordinated with internal teams and external agencies to produce high-quality, converting creative assets that resonated with target audiences during BCFM and Christmas periods.',
      },
      {
        title: 'Remarketing Campaign Architecture',
        description:
          'Developed strategic remarketing campaigns targeting previous website visitors with personalized messaging for underperforming product categories. Implemented advanced audience segmentation and dynamic creative optimization to maximize re-engagement and conversion rates during critical shopping windows.',
      },
      {
        title: 'Brand Campaign Enhancement',
        description:
          'Optimized brand campaigns specifically focused on elevating lower-tier home textile products through strategic positioning and compelling seasonal messaging. Developed brand awareness strategies that effectively communicated product value and seasonal relevance to target audiences.',
      },
      {
        title: 'Performance Achievement & Optimization',
        description:
          'Successfully achieved 100% of sales targets while increasing order volumes by 81% within the quarter through systematic campaign optimization and performance monitoring. Established new performance benchmarks and demonstrated the effectiveness of integrated seasonal marketing strategies.',
      },
      {
        title: 'Cross-Functional Team Leadership',
        description:
          'Coordinated with internal teams including +3 direct reports and external agencies to ensure seamless campaign execution across multiple channels. Managed project timelines, creative production schedules, and performance optimization cycles to maximize campaign effectiveness during peak periods.',
      },
      {
        title: 'Continuous Optimization & Scaling',
        description:
          'Implemented ongoing optimization strategies for existing creatives to drive incremental conversions beyond the initial campaign period. Developed scalable frameworks and best practices that could be applied to future seasonal campaigns and year-round marketing initiatives.',
      },
    ],

    imgSrcLight: '/static/images/projects/home_linens_seasonal_light.png',
    imgSrcDark: '/static/images/projects/home_linens_seasonal_dark.png',
    href: '/projects/home-linens-seasonal-campaign',
    company: 'Home Linens Retail Group',
    tags: [
      'seasonal-marketing',
      'performance-max',
      'google-ads',
      'creative-strategy',
      'remarketing',
      'brand-campaigns',
      'e-commerce-optimization',
      'holiday-marketing',
      'conversion-optimization',
      'search-theme-targeting',
      'video-marketing',
      'audience-segmentation',
      'campaign-management',
      'retail-marketing',
      'team-leadership',
      'results-driven',
    ],
    url: '#',
  },
  {
    title: 'TikTok Shop Sales Optimization',
    // title_extra: 'Summer 2024 Product Launch Strategy',
    id: 'tiktok-shop-optimization',
    description: `Comprehensive TikTok Shop optimization initiative supporting multiple product launches through end-to-end pre-launch, launch, and post-launch strategies for Summer 2024. This strategic project delivered exceptional results including a 400% increase in orders, 8% growth in social media reach, and 5% improvement in engagement rates through sophisticated GMV campaigns, competitive analysis, and data-driven content strategies tailored for the TikTok ecosystem.`,
    detail:
      "As Digital Marketing and E-commerce Manager at Home Linens Retail Group, I led the TikTok Shop Sales Optimization project, a comprehensive social commerce initiative designed to maximize product launch success during the Summer 2024 season. Prior to implementation, our TikTok presence was underutilized, with limited social commerce integration and minimal engagement with the platform's unique audience behaviors and purchasing patterns. I developed and executed a holistic approach encompassing thorough competitive analysis, end-to-end launch strategies spanning pre-launch anticipation building, strategic launch execution, and post-launch optimization phases. The implementation involved creating engaging product-focused content tailored to TikTok's algorithm, deploying sophisticated GMV (Gross Merchandise Value) campaigns optimized for social commerce conversions, and implementing comprehensive performance monitoring systems to gather actionable consumer insights. The results were outstanding - we achieved a 400% increase in order volumes, expanded social media reach by 8%, and improved engagement rates by 5%. The success established TikTok Shop as a critical revenue channel and provided valuable insights for scaling social commerce strategies across other platforms, demonstrating the power of platform-specific optimization combined with data-driven content strategy.",
    features: [
      {
        title: 'End-to-End Launch Strategy Framework',
        description:
          'Comprehensive three-phase approach covering pre-launch anticipation building, strategic launch execution, and post-launch optimization for maximum product launch success.',
      },
      {
        title: 'GMV Campaign Optimization',
        description:
          'Advanced Gross Merchandise Value campaigns specifically designed for TikTok Shop\'s social commerce environment, maximizing conversion rates and revenue generation.',
      },
      {
        title: 'Competitive Intelligence Analysis',
        description:
          'Thorough competitive analysis identifying market opportunities, content gaps, and strategic positioning advantages for Summer 2024 product launches.',
      },
      {
        title: 'Platform-Specific Content Strategy',
        description:
          'Tailored content creation optimized for TikTok\'s algorithm and audience behavior, including product showcases, lifestyle integration, and trend-driven messaging.',
      },
      {
        title: 'Real-Time Performance Monitoring',
        description:
          'Comprehensive campaign performance tracking and data analysis system providing actionable insights for continuous optimization and strategy refinement.',
      },
      {
        title: 'Consumer Insights Integration',
        description:
          'Advanced consumer behavior analysis gathering valuable insights from TikTok engagement patterns to boost conversion rates and inform future campaigns.',
      },
      {
        title: 'Social Commerce Optimization',
        description:
          'TikTok Shop-specific optimization techniques including seamless shopping experiences, product discovery enhancement, and conversion funnel streamlining.',
      },
      {
        title: 'Cross-Channel Integration',
        description:
          'Strategic alignment with existing marketing channels while leveraging TikTok\'s unique social commerce capabilities for maximum reach and engagement.',
      },
    ],
    contribution: [
      {
        title: 'Strategic Launch Planning & Execution',
        description:
          'Developed comprehensive end-to-end launch strategies for multiple Summer 2024 products, creating detailed pre-launch, launch, and post-launch frameworks. Established clear objectives including order volume growth, reach expansion, and engagement improvement through systematic TikTok Shop optimization.',
      },
      {
        title: 'Competitive Analysis & Market Positioning',
        description:
          'Conducted thorough competitive analysis identifying key market opportunities and strategic positioning advantages for Summer 2024 launches. Analyzed competitor content strategies, pricing approaches, and engagement tactics to inform differentiated market entry strategies.',
      },
      {
        title: 'GMV Campaign Strategy & Implementation',
        description:
          'Designed and executed sophisticated Gross Merchandise Value campaigns specifically optimized for TikTok Shop\'s social commerce environment. Implemented advanced targeting strategies, creative optimization, and conversion tracking to maximize revenue generation and order volumes.',
      },
      {
        title: 'Content Strategy & Creative Development',
        description:
          'Led comprehensive content strategy development creating engaging, platform-specific content showcasing product features and lifestyle integration. Coordinated content production including product videos, trend-based content, and user-generated content campaigns aligned with TikTok\'s algorithm preferences.',
      },
      {
        title: 'Performance Analytics & Optimization',
        description:
          'Implemented robust performance monitoring systems tracking campaign effectiveness, consumer engagement patterns, and conversion metrics. Used data-driven insights to continuously optimize campaigns, achieving 400% order volume increase and significant reach expansion.',
      },
      {
        title: 'Consumer Insights & Behavior Analysis',
        description:
          'Gathered and analyzed consumer insights from TikTok engagement patterns, shopping behaviors, and content preferences. Applied findings to boost conversion rates and inform strategic decisions for ongoing campaign optimization and future product launches.',
      },
      {
        title: 'Social Commerce Innovation',
        description:
          'Pioneered TikTok Shop optimization strategies for Home Linens Retail Group, establishing best practices for social commerce integration. Developed scalable frameworks that could be applied to future campaigns and expanded to other social commerce platforms.',
      },
      {
        title: 'Cross-Functional Collaboration & Results Achievement',
        description:
          'Coordinated with internal teams and external partners to ensure seamless campaign execution across all phases. Successfully delivered 400% increase in orders, 8% growth in social media reach, and 5% improvement in engagement rates, establishing TikTok Shop as a critical revenue channel.',
      },
    ],

    imgSrcLight: '/static/images/projects/tiktok_shop_optimization_light.png',
    imgSrcDark: '/static/images/projects/tiktok_shop_optimization_dark.png',
    href: '/projects/tiktok-shop-optimization',
    company: 'Home Linens Retail Group',
    tags: [
      'tiktok-shop',
      'social-commerce',
      'product-launch',
      'gmv-campaigns',
      'content-strategy',
      'competitive-analysis',
      'consumer-insights',
      'performance-optimization',
      'social-media-marketing',
      'e-commerce-growth',
      'conversion-optimization',
      'data-analytics',
      'cross-channel-marketing',
      'engagement-strategy',
      'revenue-growth',
      'digital-innovation',
    ],
    url: '#',
  },
]

export default projectsData
