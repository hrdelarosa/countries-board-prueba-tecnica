'use client'
import Image from 'next/image'
import { Country } from '@/types/api-endpoints'
import { Card, CardHeader, CardBody } from '@heroui/react'
import { Chip } from '@heroui/chip'
import { Link, Button } from '@heroui/react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from '@heroui/react'
import { Tooltip } from '@heroui/react'
import Clock from './clock'
import InfoItem from './infoItem'
import {
  formatArea,
  formatCoordinates,
  formatDensity,
  formatPopulation,
} from '@/utils/formatQuantities'
import { capitalize } from '@/utils/capitalize'

export default function InfoCountry({ country }: { country: Country }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <section className="flex flex-col gap-4">
      <Card radius="lg" className="border-none p-0.5">
        <CardBody className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              alt={country.flags.alt || `The flag of ${country.name.common}`}
              decoding="async"
              priority
              className="w-32 h-20 rounded-lg"
              src={country.flags.png}
              width={320}
              height={240}
            />

            <div>
              <h2 className="text-3xl font-bold">{country.name.common}</h2>
              <p className="text-default-500 font-medium">
                {country.name.official}
              </p>
              <p className="text-sm text-default-500 font-medium">
                {country.cca2}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {country.timezones.map((timezone) => (
              <div key={timezone} className="flex flex-col items-center">
                <Chip size="sm" radius="sm" color="primary">
                  {timezone}
                </Chip>

                <Clock key={timezone} timezone={timezone} />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card radius="lg" className="border-none p-0.5">
        <CardHeader className="pb-0">
          <h2 className="text-xl font-bold">General Information</h2>
        </CardHeader>

        <CardBody>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2.5">
            <InfoItem label="Common Name" value={country.name.common} />
            <InfoItem label="Official Name" value={country.name.official} />
            <InfoItem label="Capital" value={country.capital?.[0] || 'N/A'} />
            <InfoItem
              label="Population"
              value={formatPopulation({ population: country.population })}
            />
            <InfoItem
              label="Demonym (F)"
              value={
                country.demonyms ? Object.values(country.demonyms)[0].f : 'N/A'
              }
            />
            <InfoItem
              label="Demonym (M)"
              value={
                country.demonyms ? Object.values(country.demonyms)[0].m : 'N/A'
              }
            />
            <InfoItem
              label="Languages"
              value={
                country.languages
                  ? Object.values(country.languages).join(', ')
                  : 'N/A'
              }
            />
            <InfoItem
              label="Independent"
              value={country.independent ? 'Yes' : 'No'}
            />
            <InfoItem
              label="Member of the UN"
              value={country.unMember ? 'Yes' : 'No'}
            />
            <InfoItem
              label="Start of Week"
              value={capitalize({ str: country.startOfWeek })}
            />
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card radius="lg" className="border-none p-0.5">
          <CardHeader className="pb-0">
            <h2 className="text-xl font-bold">Geography</h2>
          </CardHeader>

          <CardBody>
            <div className="mt-2 grid grid-cols-2 gap-2.5">
              <InfoItem label="Continent" value={country.region} />
              <InfoItem
                label="Coordinates"
                value={
                  country.latlng
                    ? formatCoordinates({ coordinates: country.latlng })
                    : 'N/A'
                }
              />
              <InfoItem label="Subregion" value={country.subregion || 'N/A'} />
              <InfoItem
                label="Area"
                value={formatArea({ area: country.area, format: 'km' })}
              />
              <InfoItem
                label="Density"
                value={formatDensity({
                  population: country.population,
                  area: country.area,
                })}
              />
              <InfoItem
                label="Landlocked"
                value={country.landlocked ? 'Yes' : 'No'}
              />
              <InfoItem
                label="Borders"
                value={country.borders?.join(', ') || 'N/A'}
              />
            </div>
          </CardBody>
        </Card>

        <Card radius="lg" className="border-none p-0.5">
          <CardHeader className="pb-0">
            <h2 className="text-xl font-bold">Codes and Identifiers</h2>
          </CardHeader>

          <CardBody>
            <div className="mt-2 grid grid-cols-2 gap-2.5">
              <InfoItem label="ISO 3166-1 alpha-2" value={country.cca2} />
              <InfoItem label="ISO 3166-1 alpha-3" value={country.cca3} />
              <InfoItem label="ISO 3166-1 numeric" value={country.ccn3} />
              <InfoItem
                label="Top Level Domain"
                value={country.tld?.join(', ') || 'N/A'}
              />
              <InfoItem
                label="Calling Code"
                value={
                  country.idd.root && country.idd.suffixes
                    ? `${country.idd.root}${country.idd.suffixes.join('')}`
                    : 'N/A'
                }
              />
              <InfoItem label="Fifa Code" value={country.fifa || 'N/A'} />
              <InfoItem
                label="International Olympic Committee"
                value={country.cioc || 'N/A'}
              />
            </div>
          </CardBody>
        </Card>
      </div>

      <Card radius="lg" className="border-none p-0.5">
        <CardHeader className="pb-0">
          <h2 className="text-xl font-bold">Additional Information</h2>
        </CardHeader>

        <CardBody>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2.5">
            <InfoItem label="Status" value={country.status} />
            <InfoItem
              label="Currency"
              value={
                country.currencies
                  ? `${Object.values(country.currencies)[0].name} (${
                      Object.values(country.currencies)[0].symbol
                    })`
                  : 'N/A'
              }
            />
            <InfoItem
              label={`Gini Index ${
                country.gini && Object.keys(country.gini)[0]
              }`}
              value={
                country.gini
                  ? country.gini[Object.keys(country.gini)[0]].toString()
                  : 'N/A'
              }
            />
            <InfoItem label="Emoji" value={country.flag} />
            <InfoItem
              label="Card Sign"
              value={country.car ? country.car.signs.join(', ') : 'N/A'}
            />
            <InfoItem
              label="Card Side"
              value={
                country.car ? capitalize({ str: country.car.side }) : 'N/A'
              }
            />
            <InfoItem
              label="Postal Code"
              value={
                country.postalCode && country.postalCode.format
                  ? country.postalCode.format
                  : 'N/A'
              }
            />
            <InfoItem
              label="Postal Code Regex"
              value={
                country.postalCode && country.postalCode.regex
                  ? country.postalCode.regex
                  : 'N/A'
              }
            />
            <InfoItem label="Timezones">
              <div className="flex flex-wrap gap-1">
                {country.timezones.map((timezone) => (
                  <Chip key={timezone} size="sm">
                    {timezone}
                  </Chip>
                ))}
              </div>
            </InfoItem>
            <InfoItem label="Coat of Arms">
              <Image
                alt={`The coat of arms of ${country.name.common}`}
                decoding="async"
                loading="lazy"
                className="size-16 rounded-lg"
                src={country.coatOfArms?.png || country.coatOfArms?.svg || ''}
                width={64}
                height={64}
              />
            </InfoItem>
          </div>
        </CardBody>
      </Card>

      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        <Button
          as={Link}
          isExternal
          color="primary"
          href={country.maps.googleMaps}
          variant="solid"
        >
          Google Maps
        </Button>

        <Button
          as={Link}
          isExternal
          href={country.maps.openStreetMaps}
          variant="bordered"
        >
          Open Street Maps
        </Button>

        <Button onPress={onOpen} variant="faded">
          Translations
        </Button>
      </div>

      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col items-center gap-1">
                Translations
              </DrawerHeader>

              <DrawerBody>
                <div className="grid grid-cols-4 text-center gap-2.5">
                  {Object.entries(country.translations || {}).map(
                    ([lang, { official, common }]) => (
                      <div
                        key={lang}
                        className="flex flex-col items-center gap-1"
                      >
                        <Chip color="primary" variant="flat">
                          {lang.toUpperCase()}
                        </Chip>

                        <InfoItem label="Common">
                          <Tooltip
                            closeDelay={100}
                            content={
                              <div className="px-1 py-2">
                                <div className="text-small font-bold">
                                  Official - {lang.toUpperCase()}
                                </div>
                                <div className="text-tiny">{official}</div>
                              </div>
                            }
                          >
                            <span>{common}</span>
                          </Tooltip>
                        </InfoItem>
                      </div>
                    )
                  )}
                </div>
              </DrawerBody>

              <DrawerFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  )
}
