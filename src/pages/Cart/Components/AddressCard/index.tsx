import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowUpRight,
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  SealWarning,
} from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { apiCEP } from '../../../../lib/axios'
import {
  AddressCardContainer,
  AddressForm,
  CardHeader,
  PaymentMethod,
  PaymentMethodButton,
  PaymentMethodCardContainer,
} from './styles'

const newAddressFormSchema = z.object({
  address: z.object({
    postalCode: z
      .number({ invalid_type_error: 'Digite apenas números' })
      .positive('CEP inválido'),

    addressLine1: z.string().min(1, 'Informe o endereço para continuar '),

    houseNumber: z
      .number({ invalid_type_error: 'Digite apenas números' })
      .positive(),

    addressLine2: z.string(),

    suburb: z.string().min(1, 'Informe o bairro para continuar'),

    city: z.string().min(1, 'Informe a cidade para continuar'),

    state: z.string().min(2, 'Informe o estado para continuar').max(2),
  }),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type NewAddressForm = z.infer<typeof newAddressFormSchema>

export function AddressCard() {
  const {
    control,
    register,
    /* handleSubmit, */
    setValue,
    setFocus,
    formState: { errors },
    /* reset, */
  } = useForm<NewAddressForm>({
    resolver: zodResolver(newAddressFormSchema),
  })

  async function checkPostalCode(event: { target: HTMLInputElement }) {
    try {
      const cep = event.target.value.replace(/\D/g, '')
      const response = await apiCEP.get(`/${cep}/json`)

      setValue('address.city', response.data.localidade)
      setValue('address.state', response.data.uf)
      setValue('address.addressLine1', response.data.logradouro)
      setValue('address.suburb', response.data.bairro)
      setValue('address.addressLine2', response.data.complemento)

      setFocus('address.houseNumber')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <AddressCardContainer>
        <CardHeader>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </CardHeader>

        <AddressForm>
          <input
            placeholder="CEP"
            type="number"
            style={{ gridArea: 'postalCode' }}
            {...register('address.postalCode', { valueAsNumber: true })}
            onBlur={checkPostalCode}
            required
          />
          {errors.address?.postalCode && (
            <span>
              <SealWarning size={10} />
              {errors.address.postalCode.message}
            </span>
          )}

          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            style={{ gridArea: 'postalCodeLink' }}
            rel="noreferrer"
          >
            Não sei meu CEP <ArrowUpRight size={14} />
          </a>

          <input
            placeholder="Rua (Avenida, Praça, etc)"
            type="text"
            style={{ gridArea: 'addressLine1' }}
            {...register('address.addressLine1')}
            required
          />
          {errors.address?.addressLine1 && (
            <span>
              <SealWarning size={10} />
              {errors.address.addressLine1.message}
            </span>
          )}

          <input
            placeholder="Número"
            type="number"
            style={{ gridArea: 'houseNumber' }}
            {...register('address.houseNumber')}
            required
          />
          {errors.address?.houseNumber && (
            <span>{errors.address.houseNumber.message}</span>
          )}

          <input
            placeholder="Complemento (apto, bloco, prédio)"
            type="text"
            style={{ gridArea: 'addressLine2' }}
            {...register('address.addressLine2')}
          />
          {errors.address?.addressLine2 && (
            <span>
              <SealWarning size={10} />
              {errors.address.addressLine2.message}
            </span>
          )}

          <input
            placeholder="Bairro"
            type="text"
            style={{ gridArea: 'suburb' }}
            {...register('address.suburb')}
            required
          />
          {errors.address?.suburb && (
            <span>
              <SealWarning size={10} />
              {errors.address.suburb.message}
            </span>
          )}

          <input
            placeholder="Cidade/Município"
            type="text"
            style={{ gridArea: 'city' }}
            {...register('address.city')}
            required
          />
          {errors.address?.city && (
            <span>
              <SealWarning size={10} />
              {errors.address.city.message}
            </span>
          )}

          <input
            placeholder="UF"
            type="text"
            style={{ gridArea: 'state' }}
            maxLength={2}
            {...register('address.state')}
            required
          />
          {errors.address?.state && (
            <span>
              <SealWarning size={10} />
              {errors.address.state.message}
            </span>
          )}
        </AddressForm>
      </AddressCardContainer>

      <PaymentMethodCardContainer>
        <CardHeader>
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </CardHeader>

        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => {
            return (
              <PaymentMethod
                onValueChange={field.onChange}
                value={field.value}
                required
              >
                <PaymentMethodButton value="credit">
                  <CreditCard size={16} />
                  Crédito
                </PaymentMethodButton>
                <PaymentMethodButton value="debit">
                  <Bank size={16} />
                  Débito
                </PaymentMethodButton>
                <PaymentMethodButton value="cash">
                  <Money size={16} />
                  Dinheiro
                </PaymentMethodButton>
              </PaymentMethod>
            )
          }}
        />
      </PaymentMethodCardContainer>
    </>
  )
}
