import Card from "@/components/Card"
import Button from", "@/components/Button

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
          <p className="text-xl text-gray-600">
            Explore different button sizes and shapes
          </p>
        </header>

        {/* Small Buttons Section */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Small Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              title="Small Rounded SM" 
              styles="bg-blue-500 text-white px-4 py-2 text-sm rounded-sm"
            />
            <Button 
              title="Small Rounded MD" 
              styles="bg-green-500 text-white px-4 py-2 text-sm rounded-md"
            />
            <Button 
              title="Small Rounded Full" 
              styles="bg-purple-500 text-white px-4 py-2 text-sm rounded-full"
            />
          </div>
        </section>

        {/* Medium Buttons Section */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
            Medium Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              title="Medium Rounded SM" 
              styles="bg-blue-600 text-white px-6 py-3 text-base rounded-sm"
            />
            <Button 
              title="Medium Rounded MD" 
              styles="bg-green-600 text-white px-6 py-3 text-base rounded-md"
            />
            <Button 
              title="Medium Rounded Full" 
              styles="bg-purple-600 text-white px-6 py-3 text-base rounded-full"
            />
          </div>
        </section>

        {/* Large Buttons Section */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-2">
            Large Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              title="Large Rounded SM" 
              styles="bg-blue-700 text-white px-8 py-4 text-lg rounded-sm"
            />
            <Button 
              title="Large Rounded MD" 
              styles="bg-green-700 text-white px-8 py-4 text-lg rounded-md"
            />
            <Button 
              title="Large Rounded Full" 
              styles="bg-purple-700 text-white px-8 py-4 text-lg rounded-full"
            />
          </div>
        </section>

        {/* All Variations Combined */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            All Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Small Column */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Small</h3>
              <div className="flex flex-col gap-3">
                <Button 
                  title="Rounded SM" 
                  styles="bg-red-500 text-white px-4 py-2 text-sm rounded-sm w-full"
                />
                <Button 
                  title="Rounded MD" 
                  styles="bg-orange-500 text-white px-4 py-2 text-sm rounded-md w-full"
                />
                <Button 
                  title="Rounded Full" 
                  styles="bg-yellow-500 text-white px-4 py-2 text-sm rounded-full w-full"
                />
              </div>
            </div>

            {/* Medium Column */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Medium</h3>
              <div className="flex flex-col gap-3">
                <Button 
                  title="Rounded SM" 
                  styles="bg-red-600 text-white px-6 py-3 text-base rounded-sm w-full"
                />
                <Button 
                  title="Rounded MD" 
                  styles="bg-orange-600 text-white px-6 py-3 text-base rounded-md w-full"
                />
                <Button 
                  title="Rounded Full" 
                  styles="bg-yellow-600 text-white px-6 py-3 text-base rounded-full w-full"
                />
              </div>
            </div>

            {/* Large Column */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Large</h3>
              <div className="flex flex-col gap-3">
                <Button 
                  title="Rounded SM" 
                  styles="bg-red-700 text-white px-8 py-4 text-lg rounded-sm w-full"
                />
                <Button 
                  title="Rounded MD" 
                  styles="bg-orange-700 text-white px-8 py-4 text-lg rounded-md w-full"
                />
                <Button 
                  title="Rounded Full" 
                  styles="bg-yellow-700 text-white px-8 py-4 text-lg rounded-full w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Export Landing Page as default
export default Landing
