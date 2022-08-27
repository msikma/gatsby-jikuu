// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import {useStaticQuery, graphql} from 'gatsby'

export const useGitStatus = () => {
  const data = useStaticQuery(graphql`
    query GitStatusQuery {
      gitStatus {
        version
        isRepo
        homepage
        lastCommit
      }
    }
  `)
  return data.gitStatus
}
