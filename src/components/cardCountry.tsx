import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@heroui/react'
import { Users, Languages, DollarSign, Map, Flag } from 'lucide-react'
import { Countries } from '@/types/api-endpoints'
import { formatArea, formatPopulation } from '@/utils/formatQuantities'
import { endpoints } from '@/config/apiEndpoints'

export default function CardCountry({
  country,
  index,
}: {
  country: Countries
  index: number
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <Card
      key={country.name.common}
      radius="lg"
      isHoverable
      className="border-none p-0.5"
    >
      <Link href={`/country/${country.cca2}`}>
        <CardHeader className="flex items-center gap-3">
          <Image
            alt={country.flags.alt || `The flag of ${country.name.common}`}
            decoding="async"
            loading={index < 8 ? undefined : 'lazy'}
            className="w-28 h-16 rounded-lg"
            src={country.flags.png}
            priority={index < 8}
            width={320}
            height={240}
          />

          <div>
            <h2 className="text-xl font-bold">{country.name.common}</h2>
            <p className="text-sm text-default-500 font-medium">
              {country.capital?.[0]}
            </p>
          </div>
        </CardHeader>

        <CardBody className="pt-1.5 space-y-0.5">
          <div className="grid grid-cols-2 gap-1">
            <div className="flex items-center space-x-1.5">
              <Map className="size-5 pointer-events-none shrink-0 text-foreground-900" />
              <p className="text-foreground-700">{country.region}</p>
            </div>

            <div className="flex items-center space-x-1.5">
              <Languages className="size-5 pointer-events-none shrink-0 text-foreground-900" />
              <p className="text-foreground-700">
                {Object.values(country.languages)[0]}
              </p>
            </div>

            <div className="flex items-center space-x-1.5">
              <Users className="size-5 pointer-events-none shrink-0 text-foreground-900" />
              <p className="text-foreground-700">
                {formatPopulation({ population: country.population })}
              </p>
            </div>

            <div className="flex items-center space-x-1.5">
              <Flag className="size-5 pointer-events-none shrink-0 text-foreground-900" />
              <p className="text-foreground-700">{country.cca2}</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <DollarSign className="size-5 pointer-events-none shrink-0 text-foreground-900" />
            <p className="text-foreground-700">
              {country.currencies && Object.values(country.currencies)[0]
                ? Object.values(country.currencies)[0].name
                : 'N/A'}
            </p>
          </div>
        </CardBody>
      </Link>

      <CardFooter className="flex justify-end">
        <Button onPress={onOpen} color="primary" variant="light" radius="lg">
          Quick Info
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  More information
                </ModalHeader>

                <ModalBody className="pt-0 gap-0.5">
                  <Image
                    alt={
                      country.flags.alt || `The flag of ${country.name.common}`
                    }
                    decoding="async"
                    loading="lazy"
                    className="size-16 rounded-lg"
                    src={endpoints.flag({ cca2: country.cca2 })}
                    width={64}
                    height={64}
                  />
                  <p>
                    <span className="font-bold">Name official:</span>{' '}
                    {country.name.official}
                  </p>
                  <p>
                    <span className="font-bold">ISO code:</span> {country.cca2}
                  </p>
                  <p>
                    <span className="font-bold">Capital:</span>{' '}
                    {country.capital?.[0]}
                  </p>
                  <p>
                    <span className="font-bold">Population:</span>{' '}
                    {formatPopulation({
                      population: country.population,
                      format: 'people',
                    })}
                  </p>
                  <p>
                    <span className="font-bold">Region:</span> {country.region}
                  </p>
                  <p>
                    <span className="font-bold">Subregion:</span>{' '}
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-bold">Area:</span>{' '}
                    {formatArea({ area: country.area, format: 'km' })}
                  </p>
                  <p>
                    <span className="font-bold">Languages:</span>{' '}
                    {Object.values(country.languages).join(', ')}
                  </p>
                  <p>
                    <span className="font-bold">Currencies:</span>{' '}
                    {country.currencies && Object.values(country.currencies)[0]
                      ? Object.values(country.currencies)[0].name
                      : 'N/A'}{' '}
                    -{' '}
                    {country.currencies && Object.values(country.currencies)[0]
                      ? Object.values(country.currencies)[0].symbol
                      : 'N/A'}
                  </p>
                </ModalBody>

                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardFooter>
    </Card>
  )
}
