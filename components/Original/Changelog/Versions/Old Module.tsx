const Module = () => {
  return (
            <div className="space-y-10">
          <Card
            name="Xellx Alpha 0.0.2"
            content={
              <div className="space-y-10 flex gap-16">
                <div>
                  <h1 className="text-lg font-semibold">Dashboard</h1>
                  <ul className="list-disc text-sm font-light space-y-3">
                    <div>
                      <p className="mt-3 font-medium text-base">General</p>
                      <ul className="list-disc text-sm font-light">
                        <li>Added dark {"&"} light theme</li>
                        <li>
                          Added statistics page linking to the Xellx StatusPage
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="mt-3 font-medium text-base">Servers</p>
                      <ul className="list-disc text-sm font-light">
                        <li>Added audit log</li>
                        <li>Added settings</li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Promotional</h1>
                  <ul className="list-disc text-sm font-light">
                    <li>
                      Added commands page{" "}
                      <span className="italic text-gray-200 font-extralight">
                        ( with automatic json file linking )
                      </span>
                    </li>
                    <li>
                      Added statistics page linking to the Xellx StatusPage
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    Bot <span className="text-red-200">( Discontinued )</span>
                  </h1>
                  <ul className="list-disc text-sm font-light">
                    <p>
                      Moving to a typescript or javascript or another Discord
                      API Framework.
                    </p>
                  </ul>
                </div>
              </div>
            }
          />
          <Card
            name="Xellx Alpha 0.0.1"
            content={
              <div className="space-y-10 flex gap-16">
                <div>
                  <h1 className="text-lg font-semibold">Dashboard</h1>
                  <ul className="list-disc text-sm font-light space-y-3">
                    <div>
                      <p className="mt-3 font-medium text-base">General</p>
                      <li>
                        Added Discord Authentication{" "}
                        <span className="italic text-gray-200 font-extralight">
                          ( NextAuth )
                        </span>
                      </li>
                      <li>Added server selector page</li>
                    </div>

                    <div>
                      <p className="font-medium text-base">Servers</p>
                      <li>Added overview</li>
                      <li>Added plugins</li>
                    </div>
                  </ul>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Promotional</h1>
                  <ul className="list-disc text-sm font-light">
                    <li>
                      Added commands page{" "}
                      <span className="italic text-gray-200 font-extralight">
                        ( with automatic json file linking )
                      </span>
                    </li>
                    <li>
                      Added statistics page linking to the Xellx StatusPage
                    </li>
                    <li>Added audit log</li>
                    <li>Added settings</li>
                  </ul>
                </div>
              </div>
            }
          />
        </div>

  )
}

export default Module