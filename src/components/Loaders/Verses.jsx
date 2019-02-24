import ContentLoader from 'react-content-loader'

const LoaderVerses = props => (
  <ContentLoader height={80} width={403} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb" {...props}>
    <rect x="0" y="19" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0.39" y="37" rx="3" ry="3" width="380" height="6.4" />
    <rect x="0" y="56" rx="3" ry="3" width="201" height="6.4" />
  </ContentLoader>
)

export default LoaderVerses
