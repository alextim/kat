import { useStaticQuery, graphql } from 'gatsby';

const useOrganization = () => {
  const data = useStaticQuery(graphql`
    query OrganizationQuery {
      organization: yaml(fields: { type: { eq: "contacts" } }) {
        email
        fax
        geo {
          latitude
          longitude
        }
        voice {
          phone
          skype
          telegram
          viber
          whatsapp
        }
        openingHours
      }
    }
  `);

  return data.organization;
};

export default useOrganization;
