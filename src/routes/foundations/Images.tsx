import { GoADivider } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function ImagesPage() {
  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Photography</h1>
        <h3>The Government of Alberta (GoA) maintains a library of photos shot for government use that meets the criteria we follow to make our photos relevant to our citizens.</h3>

        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <div className="max-width-72ch">
          <p>Our photography reflects the diversity of the province and its people. We use photos that are thought-provoking and inspiring, with a distinct sense of place.</p>
          <p>All our photos are professionally shot and edited keeping in mind color, contrast, clarity, sharpness, and how it resonates with the intended audience.</p>

          <h2 id="goa-photo-library">GoA photo library</h2>
          <p>Our photo library offers an extensive collection of photos on various subjects. All these photos comply with the Government of Alberta (GoA) brand and content guidelines and are free to use for all our projects.</p>
          <p>The library can be accessed by all GoA staff and contractors.</p>

          <h3 id="accessing-photo-gallery">Accessing the GoA photo library</h3>
          <p>Please follow the steps below if you are a contractor or staff, and need to access the government's photo library to request a photo:</p>

          <ol className="goa-ordered-list">
            <li>Connect to GoA network. Ensure your Citrix VPN is active if you are not in a GoA office premises.</li>
            <li>Visit the <a href="https://secureaccess2.gov.ab.ca/Citrix/access2Web/" target="_blank">Citrix VPN Portal</a> to enable the VPN. In case you do not have access to the link above, you can make a request through <a href="https://bernie.gov.ab.ca/" target="_blank">Bernie</a> to get Citrix virtual desktop.</li>
            <li>Navigate to the <a href="https://standards.alberta.ca/standards/photo-and-icon-libraries.aspx" target="_blank">photo and icon libraries</a> page.</li>
            <li>Enter your credentials including the username and password in the format shown below: 
              <ul>
                <li>Username: <strong>goa\firstname.lastname</strong></li>
                <li>Password: <strong>[your-goa-password]</strong></li>
              </ul>  
            </li>
            <li>Once you see the Photo and icon libraries page, click the external link labeled "Browse the photo library" on the page. You may need to re-enter your GoA credentials in the same format as in the previous step.</li>
            <li>Use the filters or the keyword search to find an image you need.</li>
            <li>Click on “Additional information” below the thumbnail of the image that you choose to use for your project.</li>
            <li>You will see a few details of the photo listed on the Photo information page that opens.<br/>To request this photo, write an email to <a href="mailto:visual@gov.ab.ca">visual@gov.ab.ca</a> sharing the following details that you can find under Photo information section of the selected photo.
              <ul>
                <li>Photo name</li>
                <li>Photo filename</li>
                <li>Reason for request</li>
                <li>The intended use of the image</li>
              </ul>
            </li>
          </ol>
          <p>Once you have sent out the request for a photo, you may be asked more questions about its intended use. This allows ensuring that the photo is contextually appropriate to be used in a product and aligns with the ministry's messaging.</p>
          <p>The Communications office is typically quick to respond depending on how busy they are. In case your request is rejected, you can work with Communications to find an appropriate photo for your use case.</p>
          <p><a href="https://corporateidentity.alberta.ca/GOAaccess/photolibrary/PhotoSearch.cfm" target="_blank">Browse the GoA photo library</a></p>

          <h3 id="photos-sensitive-subjects">Photos for sensitive subjects</h3>
          <p>Before using any image for a sensitive subject like homelessness or child abuse, we recommend that you consult with Communications and Public Engagement (CPE) to ensure that the person in the image can be used for sensitive matters.</p>

          <h2 id="stock-photos">Stock photos</h2>
          <p>When an appropriate photo is unavailable in the government's photo library, stock photos can be used as an alternative to find photos that fit the needs of your project.</p>

          <h3 id="photo-selection">Photo selection guidelines</h3>
          <p>If you are required to use a stock photo, ensure to carefully select the image that meet the following criteria:</p>
          <ul>
            <li><strong>Regional authenticity</strong>: The photos should be shot in Alberta or should not depict any identifying elements from a location outside Alberta.</li>
            <li><strong>Location specific</strong>: While referencing a specific location, e.g. a specific town, provincial park or geographic location, the photo should be of that location.</li>
            <li><strong>Generic photos</strong>: Photos like a person writing or typing, food, person receiving an injection, etc. do not need to be from Alberta.</li>
            <li><strong>Local elements</strong>: Photos depicting safety equipment, vegetation, plants, and animals should be appropriate or native to Alberta.</li>
          </ul>
          <p>Read about copyright law and usage guidelines in the <a href="https://open.alberta.ca/dataset/afb907e6-eb1b-4bb6-a4bc-659582a1038e/resource/3a1b9758-d3b2-46ef-be59-cc07351ee59c/download/cpe-goa-identitypolicy-2019-reissue.pdf" target="_blank">GoA's Identity Policy manual</a>.</p>

          <h2 id="resolution">Resolution</h2>
          <p>When resizing images for the web, we advise adjusting the image dimensions to keep the file sizes small enough to load quickly while maintaining a good image quality to provide clarity.</p>

          <h2 id="format">Format</h2>
          <p>We typically use images in JPG or PNG format especially for photos. SVG is recommended for icons and illustrations to make them scalable while maintaining quality. Illustrations can also be used in a PNG format if needed.</p>

          <h2 id="best-practices">Best practices</h2>
          <h3 id="accessibility">Accessibility</h3>

          <ul>
            <li>Support your images with alternative text or captions to enable people with disabilities using screen readers or assistive technologies to access your images.</li>
            <li>Avoid presenting essential readable text inside an image as it cannot be accessed with assistive technologies. If you need to do so, make sure the same text is included in the alternative text or caption.</li>
            <li>We recommend not to place text or icons on images. If you need to do so, ensure that the image used as a background provides sufficient contrast to make it legible and easily readable.</li>
          </ul>

          <p>If you are working with images, please make sure to reference <a href="https://www.w3.org/WAI/tutorials/images/" target="_blank">W3C's Images tutorial</a> to know the accessibility best practices for various image formats.</p>
        </div>
      </ComponentContent>
  );
}
