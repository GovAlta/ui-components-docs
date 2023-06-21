#!/bin/bash

if [ $# -ne 1 ]
then
	echo "Missing the name param"
  echo "ex. npm run make:route [Name]"
	exit 0
fi

name=${1,}
Name=${1^}

cp .templates/route.tmpl src/routes/$1.tsx
sed -i "s/{{Name}}/$Name/g" src/routes/$1.tsx
sed -i "s/{{name}}/$name/g" src/routes/$1.tsx

echo "Route created!"
echo "=============="
echo ""

echo "Add the route to the App.tsx file"
echo "  <Route path=\"$name\" element={<${Name}Page />} />"
echo ""
echo "Add the link to the Components.tsx file"
echo "  <Link to=\"$name\">$Name</Link>"
