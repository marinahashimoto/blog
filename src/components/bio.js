/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faTwitter, faGithub)

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by{" "}
          <Link to="/about-me">
            <strong>{author.name}</strong>
          </Link>{" "}
          <br /> {author?.summary || null}
          <br />
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          {` `}
          <a href={`https://github.com/marinahashimoto`}>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
