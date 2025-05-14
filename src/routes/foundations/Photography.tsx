import { GoabDivider } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function ImagesPage() {
  return (
      <ComponentContent>
        <h1>Photography</h1>
        <h3>The Government of Alberta maintains a library of photos specifically taken for government use, ensuring they are relevant to our citizens. This collection meets our established criteria for quality and accessibility. </h3>

        <GoabDivider mt="2xl" mb="2xl"></GoabDivider>
        <div className="max-width-72ch">

          <h2 id="goa-photo-library">Government of Alberta photo library</h2>
          <p>The photo library is owned by Communications and Public Engagement (CPE) and offers an extensive collection of photos on various subjects. All these photos comply with the Government of Alberta brand and content guidelines and are free to use for all our projects.</p>
          <p>The library can be accessed by all Government of Alberta staff and contractors. To learn how to access our photo library, please see our detailed instructions on <a href="https://goa-dio.atlassian.net/l/cp/3TYiz5gU" target="_blank">Confluence</a>.</p>

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
